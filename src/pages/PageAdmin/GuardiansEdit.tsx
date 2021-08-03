import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import { guardiansService } from 'services';

export interface AttributeType {
  name?: string;
  image?: string;
  eye?: string;
  level?: string;
  mind?: string;
  body?: string;
  soul?: string;
  power?: string
  rarity?: string;
  og?: string;
}

export interface TraitType {
  trait_type: string;
  value: string;
}

const GuardiansEdit = () => {
  const attributes: (keyof AttributeType)[] = ['eye', 'level', 'mind', 'body', 'soul', 'power', 'rarity', 'og'];
  const Legendary = { White: 50, Blue: 125, Purple: 225, Green: 450 };
  const Epic = { White: 150, Blue: 300, Purple: 400, Green: 800 };
  const Master = { White: 200, Blue: 425, Purple: 625, Green: 1250 };
  const Rarity = ['A', 'B', 'C'];

  const [file, setFile] = useState();
  const fileReader = new FileReader();
  const [csvRows, setCsvRows] = useState<AttributeType[]>([]);

  const [counter, setCounter] = useState(0);

  const handleOnChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  const csvFileToArray = (text: string) => {
    const _csvHeader = text.slice(0, text.indexOf("\n")).split(",");
    const _csvBody = text.slice(text.indexOf("\n") + 1).split("\n");
    let _csvRows: AttributeType[] = [];
    for (const _record of _csvBody) {
      const arrayRecord = _record.split(",");
      let obj: AttributeType = {};
      for (let i = 0; i < arrayRecord.length; i++) {
        const field: keyof AttributeType = _csvHeader[i].trim() as (keyof AttributeType);
        obj[field] = arrayRecord[i].trim();
      }
      _csvRows.push(obj);
    }
    setCsvRows(_csvRows);
    console.log(_csvRows);
  };

  const handleOnImport = () => {
    if (file) {
      fileReader.onload = function (event) {
        const text = event?.target?.result;
        if (text) {
          csvFileToArray((text?.toString() || "").trim());
        }
      };
      fileReader.readAsText(file);
    }
  };

  const handleOnRandomRarity = () => {
    let _csvRows = [];
    for (let i = 0; i < csvRows.length; i++) {
      _csvRows.push({
        ...csvRows[i],
        rarity: Rarity[Math.floor(Math.random() * 3) % 3]
      })
    }
    setCsvRows(_csvRows);
  }

  const handleOnRandomLevel = () => {
    let _csvRows = csvRows.slice();
    let rndVal = [];
    for (let i = 0; i < csvRows.length; i++) {
      rndVal.push({
        id: i,
        value: Math.random()
      });
    }
    rndVal.sort((a, b) => {
      if (a.value < b.value) return 1;
      if (a.value > b.value) return -1;
      return 0;
    })
    let _white = 0;
    let _purple = 0;
    let _blue = 0;
    let _green = 0;
    for (let i = 0; i < csvRows.length; i++) {
      let id = rndVal[i].id;
      if (csvRows[id].eye === "White") {
        if (_white < Legendary.White) {
          _csvRows[id].level = "Legendary";
        } else if (_white < Legendary.White + Epic.White) {
          _csvRows[id].level = "Epic";
        } else if (_white < Legendary.White + Epic.White + Master.White) {
          _csvRows[id].level = "Master";
        }
        _white++;
      } else if (csvRows[id].eye === "Purple") {
        if (_purple < Legendary.Purple) {
          _csvRows[id].level = "Legendary";
        } else if (_purple < Legendary.Purple + Epic.Purple) {
          _csvRows[id].level = "Epic";
        } else if (_purple < Legendary.Purple + Epic.Purple + Master.Purple) {
          _csvRows[id].level = "Master";
        }
        _purple++;
      } else if (csvRows[id].eye === "Blue") {
        if (_blue < Legendary.Blue) {
          _csvRows[id].level = "Legendary";
        } else if (_blue < Legendary.Blue + Epic.Blue) {
          _csvRows[id].level = "Epic";
        } else if (_blue < Legendary.Blue + Epic.Blue + Master.Blue) {
          _csvRows[id].level = "Master";
        }
        _blue++;
      } else if (csvRows[id].eye === "Green") {
        if (_green < Legendary.Green) {
          _csvRows[id].level = "Legendary";
        } else if (_green < Legendary.Green + Epic.Green) {
          _csvRows[id].level = "Epic";
        } else if (_green < Legendary.Green + Epic.Green + Master.Green) {
          _csvRows[id].level = "Master";
        }
        _green++;
      }
    }
    setCsvRows(_csvRows);
  }

  const getGuardians = async () => {
    try {
      const guardians = await guardiansService.getAll();
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getGuardians();
  }, [])

  const handleOnUpload = async () => {
    for (let i = 0; i < csvRows.length; i++) {
      setCounter(csvRows.length - i - 1);
      const item = csvRows[i];
      let traits: TraitType[] = [];
      for (const attribute of attributes) {
        traits.push({
          trait_type: attribute,
          value: item[attribute]?.toString() || ""
        })
      }
      await guardiansService.post({
        name: item.name || "",
        image: item.image,
        attributes: traits
      });
    }
    setCounter(0);
  }

  const handleOnReset = async () => {
    const res = await guardiansService.reset();
    console.log(res);
  }

  return (
    <div className="nc-PageHome relative overflow-hidden">
      <Helmet>
        <title>Admin || Mind Chill</title>
      </Helmet>

      <div className="container relative space-y-10 mt-6 mb-10 sm:space-y-12 sm:my-12 lg:space-y-16 lg:my-16">
        <div className="flex text-sm text-neutral-6000 dark:text-neutral-300 items-center">
          <ButtonPrimary onClick={() => { handleOnReset(); }} className="mr-2" >RESET DATABASE</ButtonPrimary>
          <label
            htmlFor="csvFileInput"
            className="relative cursor-pointer border p-3.5 rounded-2xl font-medium text-primary-6000 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500 mr-2"
          >
            <span>Upload a file</span>
            <input className="sr-only" type={"file"} id={"csvFileInput"} accept={".csv"} onChange={handleOnChange} />
          </label>
          <ButtonPrimary onClick={() => { handleOnImport(); }} className="mr-2" >IMPORT CSV</ButtonPrimary>
          <ButtonPrimary onClick={() => { handleOnRandomRarity(); }} className="mr-2" >RANDOM RARITY</ButtonPrimary>
          <ButtonPrimary onClick={() => { handleOnRandomLevel(); }} className="mr-2" >RANDOM LEVEL</ButtonPrimary>
          <ButtonSecondary onClick={() => { handleOnUpload(); }} className="mr-2" >UPLOAD</ButtonSecondary>
          {counter > 0 && <div>COUNT DOWN: {counter}</div>}
        </div>

        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Name
                </th>
                <th scope="col" className="py-3 px-6">
                  Image
                </th>
                {attributes && attributes.map((item, _) =>
                  <th scope="col" className="py-3 px-6" key={item}>
                    {item}
                  </th>
                )}
                <th scope="col" className="py-3 px-6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {csvRows && csvRows.map((item, idx) => <tr key={idx} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item?.name}
                </th>
                <td className="py-4 px-6">
                  {item?.image}
                </td>
                {attributes && attributes.map((field, idx1) =>
                  <td className="py-4 px-6" key={idx1}>{item[field] || ""}</td>)
                }
                <td className="py-4 px-6">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
              </tr>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default GuardiansEdit;