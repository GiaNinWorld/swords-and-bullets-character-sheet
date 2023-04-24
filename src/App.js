import data from './assets/character_sheet.json';

const RACES = [
  { id: 0, name: 'Donta' }
];

const App = () => {
  const titles = Object.keys(data);
  const titlesInfo = Object.keys(data[titles[0]]);
  const titlesAttributes = Object.keys(data[titles[1]]);
  const titlesSkills = Object.keys(data[titles[2]]);

  const renderTitles = () => titlesInfo.map(item =>
  (<li key={item} className="p-4 pt-2 pb-2">
    <div className='inline-flex w-1/4'>{item}</div>
    <div className='inline-flex w-3/4'><input className='w-3/4' /></div>
  </li>)
  );

  const renderAttributes = () => titlesAttributes.map(item =>
  (<li key={item} className="p-4 pt-0 pb-0">
    <div key={item} className='inline-flex w-3/12'>{item}</div>
    <div className='inline-flex w-1/12'><input className='w-full m-2' /></div>
    <div className='inline-flex w-1/12'><input className='w-full m-2' /></div>
    <div className='inline-flex w-1/12'><input className='w-full m-2' /></div>
    <div className='inline-flex w-1/12'><input className='w-full m-2' /></div>
    <div className='inline-flex w-1/12'><input className='w-full m-2' /></div>
    <a href="#" className='px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-400 rounded-md dark:bg-gray-700 hover:bg-primary dark:hover:bg-primary'>
      Roll
    </a>
  </li>)
  );

  const renderSkillList = (skillList, title) => skillList.map(item =>
  (<li key={item} className="p-8 pt-0 pb-0">
    <div key={item} className='inline-flex w-1/6 font-bold'>{item}</div>
    <div key={item} className='inline-flex w-1/6'>({data.Skills[title][item].Attribute})</div>
    <div className='inline-flex w-1/12'><input type='radio' name={item+'level'} className='w-full' /></div>
    <div className='inline-flex w-1/12'><input type='radio' name={item+'level'} className='w-full' /></div>
    <div className='inline-flex w-1/12'><input type='radio' name={item+'level'} className='w-full' /></div>
    <div className='inline-flex w-1/12'><input type='radio' name={item+'level'} className='w-full' /></div>
    <div className='inline-flex w-1/12'><input type='radio' name={item+'level'} className='w-full m-2' /></div>
    <div className='inline-flex w-1/12'><input className='w-full m-2' /></div>
    <a href="#" className='px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-400 rounded-md dark:bg-gray-700 hover:bg-primary dark:hover:bg-primary'>
      Roll
    </a>
  </li>)
  );

  const renderSkills = () => titlesSkills.map(item =>
  (<li key={item}>
    <div className="rounded-md bg-gray-100 dark:bg-gray-800 pt-4 m-2 overflow-hidden">
      <h1 className="px-3 py-2 mx-3 mb-2 font-bold text-gray-400 dark:bg-gray-700 dark:text-gray-200 tracking-wider bg-gray-200 rounded-md">{item}</h1>
    </div>
    <li className="p-8 pt-0 pb-0 text-gray-300">
                  <div className='inline-flex w-1/6'>Skill</div>
                  <div className='inline-flex w-1/6'>(Attribute)</div>
                  <div className='inline-flex w-1/12'>Untr.</div>
                  <div className='inline-flex w-1/12'>Basic</div>
                  <div className='inline-flex w-1/12'>Trained</div>
                  <div className='inline-flex w-1/12'>Spec</div>
                  <div className='inline-flex w-1/12'>Master</div>
                  <div className='inline-flex w-1/12'>Final</div>
    </li>
    {renderSkillList(Object.keys(data.Skills[item]), item)}
  </li>)
  );

  return (
    <div className="App tracking-wide font-roboto min-h-screen grid dark bg-gray-900">
      <div className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 lg:fixed lg:w-full lg:top-0 lg:z-50 lg:left-0">
        <div className="container p-4 mx-auto">
          <div className="flex flex-col lg:items-center lg:justify-center lg:flex-row lg:space-x-4">
            <div className="flex flex-col items-center sm:flex-row sm:justify-center">
              <div className="flex items-center">
                <h1>Swords and Bullets Character Sheet</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className='dark:bg-gray-900 lg:pt-24'>

        <div className="flex flex-wrap p-4 mx-auto mt-4 w-full">

          <div className="w-2/6">
            <div className="rounded-md bg-gray-100 dark:bg-gray-800 pt-4 m-2 overflow-hidden">
              <h1 className="px-3 py-2 mx-3 mb-2 font-bold text-gray-800 dark:bg-gray-700 dark:text-gray-200 tracking-wider bg-gray-200 rounded-md">{titles[0]}</h1>
              <ul>{renderTitles()}</ul>
            </div>

            <div className="rounded-md bg-gray-100 dark:bg-gray-800 pt-4 m-2 overflow-hidden">
              <h1 className="px-3 py-2 mx-3 mb-2 font-bold text-gray-800 dark:bg-gray-700 dark:text-gray-200 tracking-wider bg-gray-200 rounded-md">{titles[1]}</h1>
              <ul>{renderAttributes()}</ul>
            </div>
          </div>

          <div className="w-2/6">
            <div className="rounded-md bg-gray-100 dark:bg-gray-800 pt-4 m-2 overflow-hidden">
              <h1 className="px-3 py-2 mx-3 mb-2 font-bold text-gray-800 dark:bg-gray-700 dark:text-gray-200 tracking-wider bg-gray-200 rounded-md">{titles[2]}</h1>

              <ul>
                {renderSkills()}
              </ul>
            </div>
          </div>

          <div className="w-2/6">
            <div className="rounded-md bg-gray-100 dark:bg-gray-800 pt-4 m-2 overflow-hidden">
              <h1 className="px-3 py-2 mx-3 mb-2 font-bold text-gray-800 dark:bg-gray-700 dark:text-gray-200 tracking-wider bg-gray-200 rounded-md">Equipments</h1>
            </div>
          </div>
        </div>

      </section>
    </div >
  );
}

export default App;
