export default function Footer() {
  return (
    <footer data-testid="footer" className="relative bg-surface-base py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-heading text-lg tracking-widest text-white uppercase">
              Estilo em Duas Rodas
            </div>
            <p className="text-xs text-gray-500 mt-1">
              por Cel. Wellington Cardoso Laureano
            </p>
          </div>

          <div className="flex items-center gap-2 text-gray-500 text-xs flex-wrap justify-center">
            <div className="w-2 h-2 bg-gold/40 rounded-full" />
            <span>Liberdade</span>
            <div className="w-2 h-2 bg-gold/40 rounded-full" />
            <span>Irmandade</span>
            <div className="w-2 h-2 bg-gold/40 rounded-full" />
            <span>Respeito</span>
            <div className="w-2 h-2 bg-gold/40 rounded-full" />
            <span>Honra</span>
          </div>

          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
