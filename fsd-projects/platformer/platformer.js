$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(300, 500, 70, 30);

    createPlatform(1350, 400, 50, 10, "red");

    createPlatform(100, 600, 70, 20, "green");

    createPlatform(400, 300, 50, 50, "blue");

    createPlatform(700, 200, 40, 40, "yellow");

    createPlatform(1000, 400, 80, 50, "orange");

    //createPlatform(1000, 200, 70, 20, "black");

    //createPlatform(600, 700, 70, 20, "black");
    
   //createPlatform(100, 100, 70, 20, "black");





    // TODO 3 - Create Collectables
    createCollectable("steve", 800, 50);
    createCollectable("diamond", 200, 170, 0.5, 0.7);
    createCollectable("database", 450, 200);
    createCollectable("grace", 1050, 290,);
    createCollectable("kennedi",1325, 350,);


    
    // TODO 4 - Create Cannons

    createCannon("left", 100, 2000);
    createCannon("bottom", 700, 1500);
    createCannon("right", 750, 750);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
