

// function fileGenerator(response) {
//   var content = `# ${response.title}
//   ##### ${response.logo}[${response.userName}](${response.GitHub}) [Email Me](${response.email}) [Deployed Application](https://www.youtube.com/channel/UCzyohHEJNSqklS1bwxmuVaA)
//   #### ReadMeGenerator© 2020 All Rights Reserved.  ${response.license} All material must be cited or credited, when using material (free to use).
  
//   ## Table of Contents
//   * [Repository Description](#Repository-Description)
//   * [Installation Instructions](#Install)
//   * [Usage Information](#Usage)
//   *[References](#Ref)
//   * [Repositiory End-Goal Criterea](#Criterea)
//   * [Future Project](#Future-Project)
  
//   # Repository Description
//   ###### [Back to Table of Contents](#Table-of-Contents)
//   ${response.description} 
  

//   ### Contribution Guidelines
//   ###### [Back to Table of Contents](#Table-of-Contents)
//   ${response.contribute}
  

//   ## Test Instructions
//   ###### [Back to Table of Contents](#Table-of-Contents)
//   1.  ${response.test}
//   2.  ${response.test2}
//   3.  ${response.test3}
  
  
//   ###### [Back to Table of Contents](#Table-of-Contents)
//   #### Demo I createad ![script.js](${response.scriptjs})
  
//   #### Demo I createad ![fileGenerator.js](${response.fileGnerator})
  
//   #### Demo I createad ![ReadMe.md](${response.ReadMe})
  
  
//   ## References
//   ###### [Back to Table of Contents](#Table-of-Contents)
//   1.  ${response.ref1}
  
//   2.  ${response.ref2}
  

//   ## License
//   ${response.license}
  
// `
//   return content;
// };

// module.exports = fileGenerator;







function fileGenerator(response) {
    var content = `# ${response.title}

  # Title
  ${response.title}
  
  # Description
  ${response.description}
  
  ## Table of contents
  * [Installation] (#installation)
  * [Usage] (#usage)
  * [Contribution] (#contribution)
  * [Tests] (#test)
  * [License] (#license)
  * [User-Name] (#userName)
  * [Email] (#email)
  
  ###### [Back to Table of Contents](#Table-of-Contents)
  
  # Installation
  ${response.installtion} 
  
  
  # Usage
  ${response.usage}

  ###### [Back to Table of Contents](#table)
 
  #Contribution
  ${response.contribution}
 
  ###### [Back to Table of Contents](#table)
  
  #Tests
  ${response.test}
  
  ###### [Back to Table of Contents](#table)
  
  #License
  ${response.license}

  ###### [Back to Table of Contents](#table)

  # userName
  ${response.userName} 

  ###### [Back to Table of Contents](#table)

  #email
  ${response.email}
  
  ###### [Back to Table of Contents](#table)
  `
  return content; 
};

module.exports = fileGenerator;