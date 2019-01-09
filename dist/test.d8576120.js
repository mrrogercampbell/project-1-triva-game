// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"../js/test.js":[function(require,module,exports) {
// Why wont this work? I want to global scope this function so that I can call on it below. changed name from createAnswerButton to createButton.
var createButton = document.createElement("button");
var i = 0;
var battleStarTriva = [{
  question: 'At the site of the crashed Raptor on Kobol was a volatile situation; the Raptor was in flames and its passengers rushed to escape the wreckage. Gaius Baltar was caught behind a wall of fire. What happened that convinced him to escape?',
  answers: {
    a: 'Six convinced him to take her hand',
    b: 'Helo dragged him out of the rackage ',
    c: 'Commander Adama told him "to move his ass!"'
  },
  correctAnswer: 'a',
  answerDetail: 'This event began Baltar\'s hallucinations on Kobol. Six called out to him to take her hand, and he had enough love for her to follow through with it. When he reached the exit, Crashdown broke him out of his trance and the two barely escaped before the Raptor exploded.'
}, {
  question: 'As a side to Colonial Day, the Quorum of Twelve, the legislative body of the fleet, was in the process of being elected. President Roslin was seriously disturbed by the delegate who was selected to represent Sagittaron. Who had been chosen?',
  answers: {
    a: 'Kara Thrace',
    b: 'Tom Zarek',
    c: 'Lee Adama'
  },
  correctAnswer: 'b',
  answerDetail: 'Tom Zarek, the terrorist who had blown up a government building on Sagittaron was selected to represent them. Many of the fleet had felt disenfranchised by the current leadership and thought Zarek would be the one to bring change. After the announcement of his office, he contacted the fleet from the Astral Queen and thanked those who had brought him to power.'
}]; // console.log(battleStarTriva[0].question)

function createQuestion() {
  var grabBodyTag = document.querySelector('body');
  var createDiv = document.createElement('div'); // const questionDiv = document.querySelector("#question-div")

  var createQuestionParagraph = document.createElement('p');
  var createTextNode = document.createTextNode("".concat(battleStarTriva[0].question));
  grabBodyTag.appendChild(createDiv);
  createDiv.appendChild(createQuestionParagraph);
  createDiv.classList.add('question-paragraph');
  createQuestionParagraph.appendChild(createTextNode);
  createQuestionParagraph.classList.add('question');
} //how to I go about passing the value of each possibly answer into it own button 
// function createAnswerBank() {
//     const answerBankA = ["answer-1"]
//     const answerBankB = ["answer-2"]
//     const answerBankC = ["answer-3"]
//     answerBankA.forEach(function() {
//         const createAnswerButton = document.createElement("button")
//         createAnswerButton.className = "possible-answer"
//         createAnswerButton.innerHTML = battleStarTriva[0].answers.a
//         document.body.appendChild(createAnswerButton)
//         // console.log(battleStarTriva[1].question)
//         // console.log(battleStarTriva[1].answers)
//         createAnswerButton.addEventListener('click', function(){
//             console.log('Ive been clicked')
//         })
//     })
//     answerBankB.forEach(function() {
//         const createAnswerButton = document.createElement("button")
//         createAnswerButton.className = "possible-answer"
//         createAnswerButton.innerHTML = battleStarTriva[0].answers.b
//         document.body.appendChild(createAnswerButton)
//         createAnswerButton.addEventListener('click', function(){
//             console.log('Ive been clicked')
//         })
//     })
//     answerBankC.forEach(function() {
//         const createAnswerButton = document.createElement("button")
//         createAnswerButton.className = "possible-answer"
//         createAnswerButton.innerHTML = battleStarTriva[0].answers.c
//         document.body.appendChild(createAnswerButton)
//         createAnswerButton.addEventListener('click', function(){
//             console.log('Ive been clicked')
//         })
//     })
// }


function createAnswerBank() {
  for (var answer in battleStarTriva[0].answers) {
    createButton.className = "possible-answer";
    createButton.innerHTML = battleStarTriva[0].answers[answer];
    document.body.appendChild(createButton);
    createButton.addEventListener('click', function () {
      console.log('Ive been clicked');
    });
    console.log(battleStarTriva[0].answers[answer]); // console.log(answer)
    // console.log(battleStarTriva[i].answers[answer])
  }
}

function submitButton() {
  var createButton = document.createElement("button");
  createButton.className = 'submit-button';
  createButton.innerHTML = 'Submit Answer';
  createButton.addEventListener('click', function () {
    console.log('What the Frak are you think?! Try again!!');
  });
  document.body.appendChild(createButton);
} // const createAnswerButton = document.createElement("button")
//     createAnswerButton.className = "possible-answer"
//     createAnswerButton.innerHTML = battleStarTriva[0].answers.a
//     document.body.appendChild(createAnswerButton)
//     // console.log(battleStarTriva[0].answers)
//     createAnswerButton.addEventListener('click', function(){
//         console.log('Ive been clicked')
//     })
// }
//clickevent when clicked incurrment up by one to control moving to next question.


createQuestion(battleStarTriva[0].question);
createAnswerBank(); // createAnswerBank()
// createAnswerBank(battleStarTriva[0].answers.a, battleStarTriva[0].answers.b, battleStarTriva[0].answers.a)
// console.log(battleStarTriva[0].answers.a)
//create a submit button
//attach an event listener to it 
//each click mov through the question bank
},{}],"../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64854" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../js/test.js"], null)
//# sourceMappingURL=/test.d8576120.map