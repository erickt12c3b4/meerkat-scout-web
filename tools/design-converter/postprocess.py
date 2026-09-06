# Hand-tuning applied on top of converter output (re-runnable after regeneration).
import re
def stack(path, grid, labels, container_marker, light=False, skip_last=False):
    s=open(path).read()
    if 'stack-table' in s and grid in s and 'stack-row' in s: return
    lines=s.split('\n'); key=f'grid-cols-[{grid}]'
    rows=[i for i,l in enumerate(lines) if key in l]; head=rows[0]
    ci=next(i for i in range(head-1,-1,-1) if container_marker in lines[i])
    vars_=' '.join(f'"--c{i+1}": "\\"{lab}\\"",' for i,lab in enumerate(labels) if lab)
    style=' style={{ ' + vars_.rstrip(',') + (', "--stack-border": "var(--color-line)"' if light else '') + ' } as React.CSSProperties}'
    lines[ci]=lines[ci].replace(container_marker, container_marker + ' stack-table', 1)
    m=re.search(r'className="[^"]*"', lines[ci]); lines[ci]=lines[ci][:m.end()]+style+lines[ci][m.end():]
    lines[head]=lines[head].replace('className="', 'className="stack-head max-md:hidden ',1)
    for r in rows[1:]:
        lines[r]=lines[r].replace('className="', 'className="stack-row ',1)
        if skip_last:
            j=r+1; ind=len(lines[r])-len(lines[r].lstrip())
            while j < len(lines) and not (lines[j].strip()=='</div>' and len(lines[j])-len(lines[j].lstrip())==ind): j+=1
            for k in range(j-1, r, -1):
                if 'className="flex-none"' in lines[k] and ('Glyph' in lines[k] or '<svg' in lines[k]):
                    lines[k]=lines[k].replace('className="flex-none"','className="flex-none stack-skip max-md:hidden"',1); break
    open(path,'w').write('\n'.join(lines))
A='/home/eric/meerkat-site-new/'
stack(A+'app/platform/feed-management/page.tsx','1.5fr_1fr_1.1fr_1.1fr_20px',['','Action','Outcome','When',''],'bg-night-card border border-night-line rounded-12 overflow-hidden', skip_last=True)
stack(A+'app/platform/conversion-intelligence/page.tsx','2.2fr_1.4fr_1.15fr_1.15fr_1.6fr',['','Feed status','Shopify orders','GA4 sessions','Next action'],'rounded-12')
stack(A+'app/platform/diagnostics/page.tsx','28px_1.6fr_.7fr_.8fr_1fr_1.2fr_1.3fr',['','','Severity','Products','Channels','Field','Rule'],'rounded-12 overflow-hidden shadow-card', light=True)
stack(A+'app/platform/diagnostics/page.tsx','2fr_1fr_1fr_1fr',['','SKU','Google · Amazon · eBay','Original message'],'border-l-[2px] border-l-tint-line-strong', light=True)
print('postprocess ok')
