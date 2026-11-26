<template>
  <div class="b2-type-specimen">
    <div class="sample">
      <p class="font-label">中文宣传标题 · 香萃潮汐宋 W40</p>
      <p class="display">生活，向未定之处生长</p>
    </div>
    <div class="sample">
      <p class="font-label">英文辅助 · Instrument Serif Regular</p>
      <p class="latin" lang="en">Room for the unexpected.</p>
    </div>
    <div class="sample">
      <p class="font-label">
        标准中文与副标题 · FandolSong Regular（Fandol 宋体）
      </p>
      <p class="standard">今天的一餐 · 食材、份量与配送</p>
    </div>
    <div class="sample">
      <p class="font-label">阿拉伯数字 · Cormorant Garamond（D3 方案）</p>
      <p class="numbers">18.80 / 38.00 / 128.60</p>
      <p class="font-note">原字体文件标注字重 500，内置样式名为 Light。</p>
    </div>
  </div>
</template>

<style scoped>
@font-face {
  font-family: 'B2 Chaoxi';
  src: url('/b2/type-lab/assets/chaoxi.ttf') format('truetype');
  font-display: swap;
}
@font-face {
  font-family: 'B2 Fandol';
  src: url('/b2/type-lab/assets/fandol.otf') format('opentype');
  font-display: swap;
}
@font-face {
  font-family: 'B2 Instrument';
  src: url('/b2/type-lab/assets/instrument.ttf') format('truetype');
  font-display: swap;
}
@font-face {
  font-family: 'B2 D3';
  src: url('/b2/type-lab/assets/cormorant.ttf') format('truetype');
  font-weight: 500;
  font-display: swap;
}
.b2-type-specimen {
  margin-block: 1.25rem;
  padding: clamp(1.1rem, 5vw, 2rem);
  background: #fbf5ea;
  border: 1px solid #e4d4bb;
  border-radius: 0.25rem;
  color: #49372a;
}
.b2-type-specimen p {
  margin: 0;
}
.sample + .sample {
  margin-top: 1.1rem;
}
.b2-type-specimen .font-label,
.b2-type-specimen .font-note {
  font:
    400 0.875rem / 1.5 system-ui,
    sans-serif;
  color: #6b5646;
}
.b2-type-specimen .font-label {
  margin-bottom: 0.3rem;
}
.b2-type-specimen .font-note {
  margin-top: 0.15rem;
}
.display {
  font:
    400 clamp(1.65rem, 4.5vw, 2.2rem) / 1.38 'B2 Chaoxi',
    serif;
}
.latin {
  color: #795135;
  font:
    400 1.18rem / 1.4 'B2 Instrument',
    serif;
}
.standard {
  font:
    400 1rem / 1.6 'B2 Fandol',
    serif;
}
.numbers {
  font:
    500 1.3rem / 1.5 'B2 D3',
    serif;
  font-variant-numeric: lining-nums tabular-nums;
}
</style>
