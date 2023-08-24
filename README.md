# Generative Kaleidoscope in p5.js with LYGIA

## The inspiration for the code is this [sketch](https://www.shadertoy.com/view/ctByWz). The kaleidoscope function has options for speed of animation, level of zoom, and number of iterations, and two parameters that provide additional control. The first row shows the "kaleidoscope" look--use m = 1.75, n = 1.15. These images remind me of what you might see looking through a traditional kaleidoscope. The second row shows a "tie-dye" look--use m = 1.5, n = 1.3. In the fourth image I am using the color as a texture for the supershapeSDF, which can be found on LYGIA.

## Notes about usage

- Using greater numbers for zoom and iterations lead to more detailed colors.
- You can call the function twice with two different sets of parameters and colors to create a more complex color.
- Darker colors are better when layering.

## I am using [LYGIA](https://github.com/patriciogonzalezvivo/lygia)'s built-in color functions add color.

<!-- IMAGE-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
  <tr>
      <td align="center"><a href="https://editor.p5js.org/kfahn/sketches/I29DSDQOS"> <img class="img" src="assets/img1.jpg" alt="Kaleidoscope" style="vertical-align:top;" width="600" /><br /><sub><b>Two Color Kaleidoscope<br/></b>p5 sketch</sub></a></td>
     <td align="center"><a href=""> <img class="img" src="assets/img2.jpg" alt="Kaleidoscope" style=" display: block;
    margin-left: auto;
    margin-right: auto;" width="600" /><br /><sub><b>Four Color Kaleidescope<br/></b>p5 sketch</sub></a></td>
    </tr>
    <tr>
      <td align="center"><a href=""> <img class="img" src="assets/img4.jpg" alt="Tie Dye" style="vertical-align:top;" width="600" /><br /><sub><b>Two Color Tie Dye<br/></b>p5 sketch</sub></a></td>
     <td align="center"><a href=""> <img class="img" src="assets/img5.jpg" alt="Kaleidoscope as texture" style=" display: block;
    margin-left: auto;
    margin-right: auto;" width="600" /><br /><sub><b>Four Colors Filling Shape<br/></b>p5 sketch</sub></a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- IMAGE-LIST:END -->
