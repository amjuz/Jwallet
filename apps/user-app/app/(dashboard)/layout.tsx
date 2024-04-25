


export default function Layout({ 
    children
}: { 
  children: React.ReactNode;
}): JSX.Element {
    return (
        <div className="flex">
            <div className="w-72 border-r border-slate-300 min-h-screen mr-4 pt-28">
                sidebar
            </div>
            {children}
        </div>
    )
}