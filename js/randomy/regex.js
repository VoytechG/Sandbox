let names = ["Jeff Bezos", "Michaelez Jackson", "Efonez Musk"];
const searchBar = "ef be ez";
const nameExcerptsToSearchFor = searchBar.toLowerCase().split(" ");

names = names.filter(name => {
  for (const excerpt of nameExcerptsToSearchFor) {
    const r = new RegExp(".*" + excerpt + ".*", "i");
    console.log(name, r.test(name));
    if (r.test(name)) return true;
  }

  return false;
});

console.log(names);
