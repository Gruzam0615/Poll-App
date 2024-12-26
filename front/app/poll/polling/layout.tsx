export default function Layout({ children }: { children: React.ReactNode }) {
    return(
        <div className="container mx-auto justify-items-center">
            {children}
        </div>
    );
}