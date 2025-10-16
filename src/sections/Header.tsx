import MyInformationJson from "../sources/myInformation.json";

import type { MyInformationInterface } from "../types";

export default function Header() {
  const information: MyInformationInterface =
    MyInformationJson as MyInformationInterface;

  return (
    <header className="shadow-lg bg-center bg-cover bg-[url(/header.jpg)]">
      <div className="section-padding h-full flex items-end bg-light-background/35 dark:bg-dark-background/35 backdrop-blur-xs">
        <div className="flex sm:flex-row flex-col gap-5">
          <div className="size-22">
            <img
              className="profile-picture "
              src="https://avatars.githubusercontent.com/u/57022857?v=4"
            />
          </div>
          <div>
            <h1>{information.name}</h1>
            <h2>{information.degree}</h2>
          </div>
        </div>
      </div>
    </header>
  );
}
