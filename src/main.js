var CheatSheet = {
  CreateCheatElement: function(id, backPos) {
    var data = document.createElement('div');
    data.classList.add('crate');
    data.classList.add('upgrade');
    data.style.backgroundPosition = backPos;
    data.id = id;
    return (data);
  },
  init: function() {
    if (document.getElementById('cheatSheet') !== undefined) {
      var style = document.createElement('style');
      style.innerHTML = "#cheatSheet:before{content:'Cheat Sheet';};#cheatSheet{height: auto;min-height: 60px;}";
      document.getElementsByTagName('head')[0].appendChild(style);
      var data = document.createElement('div');
      data.id = "cheatSheet";
      data.classList.add('storeSection');
      document.getElementById('store').insertBefore(data, document.getElementById('products'));
    }
    if (document.getElementById('autoClicker') !== undefined) {
      var data = {};
      data.id = 'autoClicker';
      data.backPos = {
        x: "-576px",
        y: "-912px"
      };
      data.l = CheatSheet.CreateCheatElement(data.id, data.backPos.x + " " + data.backPos.y);
      data.l.onmouseover = function() {
        Game.setOnCrate(this);
        Game.tooltip.dynamic = 1;
        Game.tooltip.draw(this, () => {return (CheatSheet.autoClicker.tooltip());}, 'store');
        Game.tooltip.wobble();
      };
      data.l.onclick = function() {
        CheatSheet.autoClicker.toggle();
      };
      data.l.onmouseout = function() {
        Game.setOnCrate(0);
        Game.tooltip.shouldHide = 1;
      };
      data.active = 0;
      data.clickedCookie = 0;
      data.toggle = function() {
        CheatSheet.autoClicker.active = !CheatSheet.autoClicker.active;
        CheatSheet.autoClicker.l.classList.toggle('enabled');
      };
      data.tooltip = function() {
        return ("<div style=\"min-width:350px;padding:8px;\"><div class=\"icon\" style=\"float:left;margin-left:-8px;margin-top:-8px;background-position: " + CheatSheet.autoClicker.backPos.x + " " + CheatSheet.autoClicker.backPos.y + ";\"></div><div class=\"name\">Autoclicker [" + (CheatSheet.autoClicker.active == 1 ? "On" : "Off") + "]</div><div class=\"line\"></div><div class=\"description\">A chinese man is behind every click. You realy need to thank him.</div><div class=\"line\"></div><div class=\"data\">&bull; This autoclicker has a rate of <b>1000</b> per second<br>&bull; It might be a little buggy sometime so if something dosen't work, desactivate it<br>&bull; <b>" + Beautify(CheatSheet.autoClicker.clickedCookie) + "</b> cookies clicked so far</div></div>");
      };
      CheatSheet[data.id] = data;
      document.getElementById('cheatSheet').appendChild(data.l);
    }
    if (document.getElementById('autoClickWrath') !== undefined) {
      var data = {};
      data.id = 'autoClickWrath';
      data.backPos = {
        x: "0px",
        y: "-768px"
      };
      data.l = CheatSheet.CreateCheatElement(data.id, data.backPos.x + " " + data.backPos.y);
      data.l.onmouseover = function() {
        Game.setOnCrate(this);
        Game.tooltip.dynamic = 1;
        Game.tooltip.draw(this, function() {return (CheatSheet.autoClickWrath.tooltip());}, 'store');
        Game.tooltip.wobble();
      };
      data.l.onmouseout = function() {
        Game.setOnCrate(0);
        Game.tooltip.shouldHide = 1;
      };
      data.l.onclick = function() {
        CheatSheet.autoClickWrath.toggle();
      };
      data.active = 0;
      data.clickedCookie = 0;
      data.toggle = function() {
        CheatSheet.autoClickWrath.active = !CheatSheet.autoClickWrath.active;
        CheatSheet.autoClickWrath.l.classList.toggle('enabled');
      };
      data.tooltip = function() {
        return ("<div style=\"min-width:350px;padding:8px;\"><div class=\"icon\" style=\"float:left;margin-left:-8px;margin-top:-8px;background-position: " + CheatSheet.autoClickWrath.backPos.x + " " + CheatSheet.autoClickWrath.backPos.y + ";\"></div><div class=\"name\">Auto Click Wrath Cookie [" + (CheatSheet.autoClickWrath.active ? "On" : "Off") + "]</div><div class=\"line\"></div><div class=\"description\">The elders is sending you some present, but some people don't like them.</div><div class=\"line\"></div><div class=\"data\">&bull; Some elders does not like you, so be carefull !<br>&bull; <b>" + Beautify(CheatSheet.autoClickWrath.clickedCookie) + "</b> wrath cookies clicked so far</div></div>");
      };
      CheatSheet[data.id] = data;
      document.getElementById('cheatSheet').appendChild(data.l);
    }
    if (document.getElementById('autoClickGolden') !== undefined) {
      var data = {};
      data.id = 'autoClickGolden';
      data.backPos = {
        x: "0px",
        y: "-672px"
      };
      data.l = CheatSheet.CreateCheatElement(data.id, data.backPos.x + " " + data.backPos.y);
      data.l.onmouseover = function() {
        Game.setOnCrate(this);
        Game.tooltip.dynamic = 1;
        Game.tooltip.draw(this, function() {return (CheatSheet.autoClickGolden.tooltip());}, 'store');
        Game.tooltip.wobble();
      };
      data.l.onmouseout = function() {
        Game.setOnCrate(0);
        Game.tooltip.shouldHide = 1;
      };
      data.l.onclick = function() {
        CheatSheet.autoClickGolden.toggle();
      };
      data.active = 0;
      data.clickedCookie = 0;
      data.toggle = function() {
        CheatSheet.autoClickGolden.active = !CheatSheet.autoClickGolden.active;
        CheatSheet.autoClickGolden.l.classList.toggle('enabled');
      };
      data.tooltip = function() {
        return ("<div style=\"min-width:350px;padding:8px;\"><div class=\"icon\" style=\"float:left;margin-left:-8px;margin-top:-8px;background-position: " + CheatSheet.autoClickGolden.backPos.x + " " + CheatSheet.autoClickGolden.backPos.y + ";\"></div><div class=\"name\">Auto Click Golden Cookie [" + (CheatSheet.autoClickGolden.active ? "On" : "Off") + "]</div><div class=\"line\"></div><div class=\"description\">Your grandma is sending you special cookie, be sure to eat them !</div><div class=\"line\"></div><div class=\"data\">&bull; You are too poor to eat something else anyway.<br>&bull; <b>" + Beautify(CheatSheet.autoClickGolden.clickedCookie) + "</b> golden cookies clicked so far</div></div>");
      };
      CheatSheet[data.id] = data;
      document.getElementById('cheatSheet').appendChild(data.l);
    }
    if (document.getElementById('autoBuyTech') !== undefined) {
      var data = {};
      data.id = 'autoBuyTech';
      data.backPos = {
        x: "-528px",
        y: "-1008px"
      };
      data.l = CheatSheet.CreateCheatElement(data.id, data.backPos.x + " " + data.backPos.y);
      data.l.onmouseover = function() {
        Game.setOnCrate(this);
        Game.tooltip.dynamic = 1;
        Game.tooltip.draw(this, function() {return (CheatSheet.autoBuyTech.tooltip());}, 'store');
        Game.tooltip.wobble();
      };
      data.l.onmouseout = function() {
        Game.setOnCrate(0);
        Game.tooltip.shouldHide = 1;
      };
      data.l.onclick = function() {
        CheatSheet.autoBuyTech.toggle();
      };
      data.active = 0;
      data.clickedCookie = 0;
      data.toggle = function() {
        CheatSheet.autoBuyTech.active = !CheatSheet.autoBuyTech.active;
        CheatSheet.autoBuyTech.l.classList.toggle('enabled');
      };
      data.tooltip = function() {
        return ("<div style=\"min-width:350px;padding:8px;\"><div class=\"icon\" style=\"float:left;margin-left:-8px;margin-top:-8px;background-position: " + CheatSheet.autoBuyTech.backPos.x + " " + CheatSheet.autoBuyTech.backPos.y + ";\"></div><div class=\"name\">Auto Buy Tech Upgrade [" + (CheatSheet.autoBuyTech.active ? "On" : "Off") + "]</div><div class=\"line\"></div><div class=\"description\">Look at your grandma ! She looks beautiful with that extra pair of eyes !</div><div class=\"line\"></div><div class=\"data\">&bull; Take care of your cyber grandma, she can't heal you if she is dead !<br>&bull; <b>" + Beautify(CheatSheet.autoBuyTech.clickedCookie) + "</b> technical upgrade buyed so far</div></div>");
      };
      CheatSheet[data.id] = data;
      document.getElementById('cheatSheet').appendChild(data.l);
    }
    if (document.getElementById('autoBuyUpgrade') !== undefined) {
      var data = {};
      data.id = 'autoBuyUpgrade';
      data.backPos = {
        x: "-528px",
        y: "-1104px"
      };
      data.l = CheatSheet.CreateCheatElement(data.id, data.backPos.x + " " + data.backPos.y);
      data.l.onmouseover = function() {
        Game.setOnCrate(this);
        Game.tooltip.dynamic = 1;
        Game.tooltip.draw(this, function() {return (CheatSheet.autoBuyUpgrade.tooltip());}, 'store');
        Game.tooltip.wobble();
      };
      data.l.onmouseout = function() {
        Game.setOnCrate(0);
        Game.tooltip.shouldHide = 1;
      };
      data.l.onclick = function() {
        CheatSheet.autoBuyUpgrade.toggle();
      };
      data.active = 0;
      data.clickedCookie = 0;
      data.toggle = function() {
        CheatSheet.autoBuyUpgrade.active = !CheatSheet.autoBuyUpgrade.active;
        CheatSheet.autoBuyUpgrade.l.classList.toggle('enabled');
      };
      data.tooltip = function() {
        return ("<div style=\"min-width:350px;padding:8px;\"><div class=\"icon\" style=\"float:left;margin-left:-8px;margin-top:-8px;background-position: " + CheatSheet.autoBuyUpgrade.backPos.x + " " + CheatSheet.autoBuyUpgrade.backPos.y + ";\"></div><div class=\"name\">Auto Buy Upgrade [" + (CheatSheet.autoBuyUpgrade.active ? "On" : "Off") + "]</div><div class=\"line\"></div><div class=\"description\">Summon more cookies.</div><div class=\"line\"></div><div class=\"data\">&bull; How to enlarge your cookie in 5 clicks !<br>&bull; <b>" + Beautify(CheatSheet.autoBuyUpgrade.clickedCookie) + "</b> upgrade buyed so far</div></div>");
      };
      CheatSheet[data.id] = data;
      document.getElementById('cheatSheet').appendChild(data.l);
    }
    if (document.getElementById('autoBuyBuildings') !== undefined) {
      var data = {};
      data.id = 'autoBuyBuildings';
      data.backPos = {
        x: "-528px",
        y: "-1056px"
      };
      data.l = CheatSheet.CreateCheatElement(data.id, data.backPos.x + " " + data.backPos.y);
      data.l.onmouseover = function() {
        Game.setOnCrate(this);
        Game.tooltip.dynamic = 1;
        Game.tooltip.draw(this, function() {return (CheatSheet.autoBuyBuildings.tooltip());}, 'store');
        Game.tooltip.wobble();
      };
      data.l.onmouseout = function() {
        Game.setOnCrate(0);
        Game.tooltip.shouldHide = 1;
      };
      data.l.onclick = function() {
        CheatSheet.autoBuyBuildings.toggle();
      };
      data.active = 0;
      data.clickedCookie = 0;
      data.toggle = function() {
        CheatSheet.autoBuyBuildings.active = !CheatSheet.autoBuyBuildings.active;
        CheatSheet.autoBuyBuildings.l.classList.toggle('enabled');
      };
      data.tooltip = function() {
        return ("<div style=\"min-width:350px;padding:8px;\"><div class=\"icon\" style=\"float:left;margin-left:-8px;margin-top:-8px;background-position: " + CheatSheet.autoBuyBuildings.backPos.x + " " + CheatSheet.autoBuyBuildings.backPos.y + ";\"></div><div class=\"name\">Auto Buy Buildings [" + (CheatSheet.autoBuyBuildings.active ? "On" : "Off") + "]</div><div class=\"line\"></div><div class=\"description\">Randomness is a thing, but you are better :)</div><div class=\"line\"></div><div class=\"data\">&bull; Are you a robot ?<br>&bull; <b>" + Beautify(CheatSheet.autoBuyBuildings.clickedCookie) + "</b> buildings buyed so far</div></div>");
      };
      CheatSheet[data.id] = data;
      document.getElementById('cheatSheet').appendChild(data.l);
    }
    if (CheatSheet.loop === undefined) {
      CheatSheet.loop = function() {
        return new Promise((resolve) => {
          setTimeout(() => {
            if (CheatSheet.autoClicker.active) {// autoClicker
              document.getElementById('bigCookie').click();
              CheatSheet.autoClicker.clickedCookie += 1;
            }

            Game.shimmers.forEach((shimmer) => {
              if (CheatSheet.autoClickGolden.active && (shimmer.wrath === undefined || shimmer.wrath == 0)) {
                shimmer.l.click();
                CheatSheet.autoClickGolden.clickedCookie += 1;
              } else if ((shimmer.wrath !== undefined || shimmer.wrath != 0) && CheatSheet.autoClickWrath.active) {
                shimmer.l.click();
                CheatSheet.autoClickWrath.clickedCookie += 1;
              }
            });

            var techUpgrades = document.getElementById('techUpgrades').children; // buy tech upgrades
            for (var i = 0; i < techUpgrades.length && CheatSheet.autoBuyTech.active; i += 1) {
              techUpgrades[i].click();
              CheatSheet.autoBuyTech.clickedCookie += 1;
            }

            var upgrades = document.getElementById('upgrades').children; // buy upgrade
            for (var i = 0; i < upgrades.length && CheatSheet.autoBuyUpgrade.active; i += 1) {
              upgrades[i].click();
              CheatSheet.autoBuyUpgrade.clickedCookie += 1;
            }

            for (var i = Game.ObjectsById.length - 1; CheatSheet.autoBuyBuildings.active && i >= 0; i -= 1) { // Buy buildings
              Game.ObjectsById[i].buy();
              CheatSheet.autoBuyBuildings.clickedCookie += 1;
            }
            CheatSheet.loop();
            resolve("toto");
          }, 1);
        });
      }
      CheatSheet.loop();
    }
  }
};
CheatSheet.init();
