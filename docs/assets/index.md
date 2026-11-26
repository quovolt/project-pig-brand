<script setup>
import { withBase } from 'vitepress'
</script>

# 资产与产物入口

这里集中列出仓库内**现存可直达的全部研究与设计产物**。它们是当前阶段的原型与证据，不是可公开下载的生产包；未经批准的命名、图形候选和参考素材不得当成正式品牌文件。

## 1. 可交互排版与场景原型

- <a :href="withBase('/b2/type-lab/index.html')">原排版试验台</a>：可交互预览四角色字体的尺寸、行高与搭配
- <a :href="withBase('/b2/type-lab/specimen.html')">原排版样稿</a>：单页完整排版基准样本
- <a :href="withBase('/b2/type-lab/scenarios/index.html')">双触点场景复现试验（入口）</a>
  - <a :href="withBase('/b2/type-lab/scenarios/campaign.html')">01 · 宣传触点样张</a>（感受优先）
  - <a :href="withBase('/b2/type-lab/scenarios/product.html')">02 · 商品信息触点样张</a>（行动与可读性优先）

## 2. 视觉概念图与字体对比图

图文说明与取舍背景见 [B2 · 概念图与字体原件](../brand/system/b2/assets)；以下为全部 10 张原图直链：

### 视觉概念图（7 张）

| 产物                 | 用途与说明                                         | 原图                                                                                  |
| -------------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------- |
| 三触点概念画板       | 主画面放开、商品与服务界面退后的三触点表达方向     | [three-touchpoints.png](/b2/concepts/three-touchpoints.png)                           |
| 餐桌主画面早期研究   | 色块与线条相互牵引的早期画面探索                   | [early-table-study.png](/b2/concepts/early-table-study.png)                           |
| 热气的艺术替换       | 保留手、夹子、锅与食材锚点，以金黄橙红色层替代热气 | [b2-steam-substitution-v1.png](/b2/concepts/b2-steam-substitution-v1.png)             |
| 切肉与端碗跨场景对照 | 换题材后的迁移试画（非逐幅确认成品）               | [b2-cross-scene-study-v1.png](/b2/concepts/b2-cross-scene-study-v1.png)               |
| 窗前的影子           | 保留木窗、手与陶盆原形，墙面展开暖色枝叶投影       | [b2-window-shadow-v1.png](/b2/concepts/b2-window-shadow-v1.png)                       |
| 未定之影             | 放开窗框与受光限制，尝试空间走向带来的「未定」感   | [b2-undetermined-shadow-v1.png](/b2/concepts/b2-undetermined-shadow-v1.png)           |
| 色组对照研究         | 回看金黄与橙红暖色主线的对比图（非正式色卡）       | [b2-palette-comparison-study-v1.png](/b2/concepts/b2-palette-comparison-study-v1.png) |

### 字体对比图（3 张）

| 产物                      | 用途与说明                               | 原图                                                                            |
| ------------------------- | ---------------------------------------- | ------------------------------------------------------------------------------- |
| 三套入围字体横向对比      | 历史保留方案回看                         | [three-retained-systems.png](/b2/concepts/three-retained-systems.png)           |
| 潮汐宋 × 标准中文搭配对比 | 校验标准中文承担正式说明时不与宣传字抢戏 | [tide-standard-pairing.png](/b2/concepts/tide-standard-pairing.png)             |
| 四版数字修订与混排对比    | 确立 D3 数字主方案的横向比较图           | [numerals-revised-comparison.png](/b2/concepts/numerals-revised-comparison.png) |

## 3. 原字体、许可与校验清单

| 角色                                       | 字体文件                                             | 许可与说明                                                                                                                      |
| ------------------------------------------ | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| 中文宣传主标题 · 香萃潮汐宋 W40            | [chaoxi.ttf](/b2/type-lab/assets/chaoxi.ttf)         | [chaoxi-OFL.txt](/b2/type-lab/licenses/chaoxi-OFL.txt)                                                                          |
| 标准中文与副标题 · FandolSong Regular      | [fandol.otf](/b2/type-lab/assets/fandol.otf)         | [Fandol-README.txt](/b2/type-lab/licenses/Fandol-README.txt) · <a :href="withBase('/b2/type-lab/licenses/COPYING')">COPYING</a> |
| 英文辅助 · Instrument Serif Regular        | [instrument.ttf](/b2/type-lab/assets/instrument.ttf) | [instrumentserif-OFL.txt](/b2/type-lab/licenses/instrumentserif-OFL.txt)                                                        |
| 阿拉伯数字 · Cormorant Garamond（D3 原件） | [cormorant.ttf](/b2/type-lab/assets/cormorant.ttf)   | [cormorantgaramond-OFL.txt](/b2/type-lab/licenses/cormorantgaramond-OFL.txt)                                                    |

- 字体表结构与 SHA-256 校验：<a :href="withBase('/b2/type-lab/FONT-VALIDATION.json')">FONT-VALIDATION.json</a>
- 原排版站点静态文件恢复清单：<a :href="withBase('/b2/type-lab/RECOVERY-MANIFEST.json')">RECOVERY-MANIFEST.json</a>

## 4. 速查与治理文档

- **表达速查**：[视觉表达速查](../brand/visual-identity) · [语言与角色速查](../brand/voice-and-writing)
- **藏锐路径与工程骨架**：[藏锐路径范式](../brand/narrative/paradigm) · [品牌工程骨架](../brand/system/) · [当前进度基线](../brand/system/baseline)
- **追溯与隔离规则**：[决定与原稿索引](../brand/system/replay) · [提交与保留范围](../brand/system/retention)

进入正式使用清单前，须逐项记录版本、用途、来源、权利和验证状态。VitePress 生成目录不作为源文件提交。
