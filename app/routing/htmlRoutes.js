module.exports = setStatics = function (appMod, pathMod) {
  
    function setStaticRoute(route, fileName) {
        appMod.get(route, function (req, res) {
            res.sendFile(pathMod.join(__dirname, "..", "public", fileName + ".html"));
        });
    }

    setStaticRoute("/survey", "survey");
    setStaticRoute("/survey2", "survey2");
    setStaticRoute("/survey3", "survey3");




  
    setStaticRoute("*", "home");
}