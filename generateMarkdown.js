// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache license 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GNU General Public License v3.0[![License: GPL ":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "MIT License":
      return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
      break;
    case "BSD 2-Clause “simplified” License":
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "BSD 3 Clause “New” or “Revised” License":
      return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      break;
    case "Boost Software License 1.0":
      return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
      break;
    case "Creative Commons Zero v1.0 Universal":
      return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
      break;
    case "Eclipse Public License 2.0":
      return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
      break;
    case "GNU Affero General Public License v3.0":
      return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
      break;
    case "GNU General Public License v 2.0":
      return "[![License: GPL v2](https://img.shields.io/bad ge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
      break;
    case "GNU Lesser General Public License v 2.1":
      return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
    case "Mozilla Public License 2.0":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
    case "The Unlicense":
      return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
      break;
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseReadme(license) {
  switch (license) {
    case "Apache license 2.0":
      return `Apache license 2.0
   https://www.apache.org/licenses/LICENSE-2.0`;
      break;
    case "GNU General Public License v3.0":
      return `GNU General Public Licensev3.0
   https://www.gnu.org/licenses/gpl-3.0.en.html`;
      break;
    case "MIT License":
      return `MIT License 
   https://opensource.org/license/mit/`;
      break;
    case "BSD 2-Clause “simplified” License":
      return `BSD 2-Clause “simplified” License
   https://www.boost.org/LICENSE_1_0.txt`;
      break;
    case "BSD 3 Clause “New” or “Revised” License":
      return `BSD 3 Clause “New” or “Revised” License
   https://joinup.ec.europa.eu/licence/bsd-3-clause-new-or-revised-license#:~:text=BSD%203%2Dclause%20is%20a,it%20(found%20in%20Fulltext).`;
      break;
    case "Boost Software License 1.0":
      return `Boost Software License 1.0
   https://www.boost.org/LICENSE_1_0.txt`;
      break;
    case "Creative Commons Zero v1.0 Universal":
      return `Creative Commons Zero v1.0 Universal
   https://creativecommons.org/publicdomain/zero/1.0/`;
      break;
    case "Eclipse Public License 2.0":
      return `Eclipse Public License 2.0
   https://www.eclipse.org/legal/epl-2.0/`;
      break;
    case "GNU Affero General Public License v3.0":
      return `GNU Affero General Public License v3.0 
   https://www.gnu.org/licenses/agpl-3.0.en.html`;
      break;
    case "GNU General Public License v 2.0":
      return `GNU General Public License v 2.0
   https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html`;
      break;
    case "GNU Lesser General Public License v 2.1":
      return `GNU Lesser General Public License v 2.1
   https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html`;
    case "Mozilla Public License 2.0":
      return `Mozilla Public License 2.0
   https://www.mozilla.org/en-US/MPL/2.0/`;
      break;
    case "The Unlicense":
      return `The Unlicense 
   https://choosealicense.com/licenses/unlicense/`;
      break;
    default:
      return "";
  }
}

module.exports = { renderLicenseBadge, renderLicenseReadme };