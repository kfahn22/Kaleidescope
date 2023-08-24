// Adapted from  https://www.shadertoy.com/view/ctByWz

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform sampler2D u_tex0;

#define PLATFORM_WEBGL

#include "lygia/animation/easing.glsl"
#include "lygia/color/palette/spectral.glsl"
#include "lygia/color/pigments.glsl"
#include "lygia/color/blend.glsl"
#include "lygia/math/rotate2d.glsl"
#include "lygia/math/const.glsl"

#define ORANGE vec3(240, 128, 60) / 255.
#define PURPLE vec3(100, 1, 128) / 255.
#define BLUE vec3(58, 110, 165) / 255.
#define RED vec3(140, 0, 26) / 255.

float kaleidescope( vec2 st, float speed, float zoom, float m, float n, int N) {
    #ifdef CENTER_2D
    st -= CENTER_2D;
    #else
    st -= 0.5;
    #endif
    vec3 r = u_resolution.xxx;
    vec3 uv = vec3((2.0 * st.xyy- r)/r.x * zoom);
    uv.z = sineIn(u_time*speed);
	uv *= 0.35;
	#ifdef PLATFORM_WEBGL
    for (int i = 0; i< 10; i++) {
        if (i >= N) break;
    #else
    for (int i = 0; i< N; i++) {
    #endif
		uv = abs( uv ) / dot( uv, uv ) - m; 
        uv = length( uv )*( uv + n); // 1.15
	}
    uv = vec3(dot( uv, uv ) * 0.5) ;
    return uv.x;
}
  
void main()
{
    vec2 uv = gl_FragCoord.xy;
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec2 mouse = u_mouse.xy;
    vec4 color = vec4(vec3(0), 1.);
    

    // Clamping f between [0.0, 1.0] mutes colors
    // Two Colors
    float f = kaleidescope(uv, 0.1, 3.0, 1.75, 1.15, 6); // 3.0, 6
    color.rgb = mix(ORANGE, PURPLE, f);

    // Adding two additional colors
    f = kaleidescope(uv, 0.1, 5.0, 1.75, 1.15, 7);// 5.0, 7
    color.rgb = blendAdd(color.rgb, mix(RED, BLUE, f));
    
    // Spectral color, less detail
    //float f = kaleidescope(uv, 0.25, 4.0, 1.15 1.75, 6);
    //color.rgb = spectral_zucconi(f);



    // CAN ALSO CALL GENKALEIDOSCOPE AFTER KALEIDOSCOPE 
    //vec2 kv = genKaleidoscope(uv*pixel, pixel, t, 3.0, 1.75, 1.15, 5); // 3.0, 6
    // clamp kv.x to get more muted colors
    // kv.x = clamp(kv.x, 0.0, 1.0);
    // color.rgb = mix(ORANGE, PURPLE, kv.x);
    
    gl_FragColor = color;
}