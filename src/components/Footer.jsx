export default function Footer() {
  return (
    <footer className="bg-black/30 mt-8">
      <div className="container mx-auto px-4 py-6 text-center">
        <p>© {new Date().getFullYear()} Gamehub. All rights reserved.</p>
      </div>
    </footer>
  );
}