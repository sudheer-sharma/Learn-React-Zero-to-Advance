import React, { useState } from "react";

const HandleCheckBox = () => {
  // // First part
  // const [isHtml, setIsHtml] = useState(true);
  // const [isCSS, setIsCSS] = useState(true);
  // const [isJavaScript, setIsJavaScript] = useState(true);

  // function html(e) {
  //   setIsHtml(e.target.checked);
  // }
  // function css(e) {
  //   setIsCSS(e.target.checked);
  // }
  // function JavaScript(e) {
  //   setIsJavaScript(e.target.checked);
  // }
  //
  //
  // // Scond Part
  const [islanguage, setLanguage] = useState({
    HTML: false,
    CSS: false,
    JS: false,
  });

  // console.log(islanguage);

  function handleAll(e) {
    let key = e.target.name;

    setLanguage({ ...islanguage, [key]: e.target.checked });
  }

  let isAllValue = Object.values(islanguage).every((item) => item === true);
  console.log(isAllValue);

  return (
    <div>
      <label htmlFor="all">
        <input
          id="all"
          name="all"
          type="checkbox"
          // checked={isHtml}
          // onChange={(e) => setIsHtml(e.target.checked)}
          checked={isAllValue}
          // onChange={(e) =>
          //   setLanguage({ ...islanguage, HTML: e.target.checked })
          // }
          onChange={(e) => {
            setLanguage({
              HTML: e.target.checked,
              CSS: e.target.checked,
              JS: e.target.checked,
            });
          }}
        />
        Select All
      </label>

      {/* First Part */}
      <label htmlFor="html">
        <input
          id="html"
          name="HTML"
          type="checkbox"
          // checked={isHtml}
          // onChange={(e) => setIsHtml(e.target.checked)}
          checked={islanguage.HTML}
          // onChange={(e) =>
          //   setLanguage({ ...islanguage, HTML: e.target.checked })
          // }
          onChange={handleAll}
        />
        Click on HTML
      </label>

      <br />
      <label htmlFor="css">
        <input
          id="css"
          name="CSS"
          type="checkbox"
          // checked={isCSS}
          // onChange={(e) => setIsCSS(e.target.checked)}
          checked={islanguage.CSS}
          // onChange={(e) =>
          //   setLanguage({ ...islanguage, CSS: e.target.checked })
          // }
          onChange={handleAll}
        />
        Click on CSS
      </label>
      <br />
      <label htmlFor="js">
        <input
          id="js"
          name="JS"
          type="checkbox"
          // checked={isJavaScript}
          // onChange={(e) => setIsJavaScript(e.target.checked)}
          checked={islanguage.JS}
          // onChange={(e) => setLanguage({ ...islanguage, JS: e.target.checked })}
          onChange={handleAll}
        />
        Click on JAvASacript
      </label>
      <br />
      <br />
      {/* {isHtml && "(Html selected)"}
      {isCSS && "(CSS selected)"}
      {isJavaScript && "(JS selected)"} */}
      {islanguage.HTML && "(Html selected)"}
      {islanguage.CSS && "(CSS selected)"}
      {islanguage.JS && "(JS selected)"}
    </div>
  );
};

export default HandleCheckBox;
