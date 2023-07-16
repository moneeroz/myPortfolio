import React from "react";

const Header = () => {
  return (
    <>
      <h1 className="text-5xl font-extrabold">
        Hello I&apos;m{" "}
        <span className="bg-gradient-to-r from-purple-600 via-red-400 to-orange-400 bg-clip-text text-transparent">
          Moneer
        </span>
      </h1>

      <p className="mt-3 text-xl text-gray-600">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
        molestiae, cum temporibus ratione reprehenderit eveniet magnam aliquid
        facere repellat amet at repudiandae autem qui, illum, obcaecati
        distinctio quos modi. Voluptatum assumenda magni mollitia velit atque
        dolor quae labore quasi at! Illo velit similique ex totam maxime officia
        accusamus, voluptate quaerat.
      </p>
    </>
  );
};

export default Header;
