;<div className="container mx-52 absolute top-0   h-full flex justify-between items-center">
  <div>
    <img
      src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
      alt=""
    />
    <h3 className="font-semibold text-4xl text-white mt-8">
      Dakikalar içinde kapınızda
    </h3>
  </div>
  <div className="w-96 rounded-lg bg-white p-6 ">
    <h3 className="text-primary-brand-color text-center font-semibold mb-4">
      Giriş Yap Veya Kayıt Ol
    </h3>

    <div className="grid gap-y-4">
      <div className="flex gap-x-2">
        <ReactFlagsSelect
          countries={Object.keys(phones)}
          customLabels={phones}
          placeholder="Select Language"
          selected={selected}
          onSelect={(code) => setSelected(code)}
          className="flag-select"
        />
        <label className="flex-1 relative group  block">
          <input
            required
            className="w-full h-14 px-4 rounded bg-white border-2 border-gray-200 transition-colors cursor-pointer group-hover:border-primary-brand-color  outline-none pt-4 peer "
          />
          <span className="absolute h-full top-0 left-0 flex items-center mx-4 text-sm text-gray-400 transition-all peer-focus:h-5  peer-focus:text-primary-brand-color peer-focus:text-xs  peer-valid:h-5 peer-valid:text-primary-brand-color peer-valid:text-xs   ">
            Telefon Numarası
          </span>
        </label>
      </div>
      <button className="bg-brand-yellow h-12 flex items-center justify-center w-full text-sm text-primary-brand-color hover:text-brand-yellow hover:bg-primary-brand-color transition-colors rounded-lg  font-semibold">
        Telefon numarası ile devam et
      </button>
      <hr className="h-[1px] bg-gray-300 my-2" />
      <button className="bg-blue-700 bg-opacity-10 px-4 text-opacity-80 h-12 flex items-center  w-full text-sm text-primary-brand-color hover:text-white hover:bg-blue-700 transition-colors rounded-lg  font-semibold">
        <FaFacebook size={24} />{' '}
        <span className="mx-auto">Facebook ile devam et</span>
      </button>
    </div>
  </div>
</div>
