export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/1a437a0b-393f-4e6a-907d-adbd5528fd34/files/872ad19d-cfee-4145-b217-f6aa5e3e2cd2.jpg"
          alt="Корпусная мебель оптом"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Почему выбирают нас</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Любые размеры, любые объёмы. Мы производим корпусную мебель точно под ваши проекты — от единичных заказов до крупных партий для застройщиков и сетевых магазинов.
        </p>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Запросить каталог
        </button>
      </div>
    </div>
  );
}