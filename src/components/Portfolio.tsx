const PORTFOLIO_URL = "https://drive.google.com/drive/folders/1YgSbINzSIKAoiQJ61APWmZy76m7EO-Jx?usp=sharing";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-neutral-100 flex flex-col items-center justify-center px-6 py-24">
      <h3 className="uppercase text-sm tracking-wide text-neutral-500 mb-4">Наши работы</h3>
      <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 text-center mb-6 leading-tight max-w-3xl">
        Портфолио готовых проектов
      </h2>
      <p className="text-lg text-neutral-600 text-center max-w-xl mb-12">
        Сотни реализованных объектов — от квартирных проектов до крупных коммерческих поставок. Смотрите реальные работы нашего производства.
      </p>
      <a
        href={PORTFOLIO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black text-white border border-black px-8 py-4 text-sm uppercase tracking-widest font-semibold transition-all duration-300 hover:bg-white hover:text-black"
      >
        Смотреть портфолио →
      </a>
    </div>
  );
}
