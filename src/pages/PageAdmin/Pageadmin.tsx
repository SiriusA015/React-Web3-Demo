import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import { guardiansService } from 'services';
import { Guardian } from "types";
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
const PageAdmin = () => {
  const attributes: (keyof AttributeType)[] = ['eye', 'level', 'mind', 'body', 'soul', 'power', 'rarity', 'og'];
  const [guardians, setGuardians] = useState<Guardian[]>([]);

  const getGuardians = async () => {
    try {
      const _guardians = await guardiansService.getAll();
      setGuardians(_guardians);
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getGuardians();
  }, [])

  return (
    <div className="nc-PageHome relative overflow-hidden">
      <Helmet>
        <title>Admin || Mind Chill</title>
      </Helmet>

      <div className="container relative space-y-10 mt-6 mb-10 sm:space-y-12 sm:my-12 lg:space-y-16 lg:my-16">
        <div className="flex text-sm text-neutral-6000 dark:text-neutral-300 items-center">
          <ButtonPrimary onClick={() => { window.location.href = "/admin/guardians/edit" }} className="mr-2" >Guardians</ButtonPrimary>
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
              </tr>
            </thead>
            <tbody>
              {guardians && guardians.map((item, idx) => <tr key={idx} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item?.name}
                </th>
                <td className="py-4 px-6">
                  {item?.image}
                </td>
                {attributes && attributes.map((field, idx1) =>
                  <td className="py-4 px-6" key={idx1}>
                    {
                      ((item.attributes || []).find(el => {
                        if ((el as TraitType).trait_type === field) return true; else return false;
                      }) as TraitType)?.value
                    }
                  </td>)
                }
              </tr>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default PageAdmin;