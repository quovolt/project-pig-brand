# The Words

The Words is one part of brand design: discovering the brand's inner meaning and turning it into clear, credible outward language. Visual identity and other parts of the brand have their own documentation.

## Our workflow

This is the working flowchart developed in our brand-words discussion on 6 November 2026. It organizes the process; it does not establish Project Pig's final positioning, words, or brand rules.

![Brand-words workflow: prepare material, abstract meaning, choose an inner idea, research the audience, define positioning, transform language, apply it, and test and refine.](./brand-words-workflow.svg)

<a :href="flowchartUrl">Open the full-size flowchart</a>

## Read the flow

1. **Prepare group material.** Collect concrete stories, actions, ambitions, and questions. Separate what has happened from what we hope to become.
2. **Abstract the material.** Observe, interpret, compare, group, and name possible themes. Keep evidence and alternative interpretations attached.
3. **Choose an inner idea and words.** Select the meanings that are true and distinctive about the group, with reasons and examples. These are not necessarily customer-facing words.
4. **Research the audience.** Learn about needs, context, language, and alternatives. Gather and weigh evidence rather than only confirming assumptions. This work can develop alongside the internal meaning.
5. **Define positioning.** Connect the inner idea with audience relevance: for whom, in what context, what value, and why us? Treat the result as a hypothesis to test.
6. **Transform into outward language.** Explore several directions for words and messages, each connected to the inner idea and evidence.
7. **Apply in real contexts, then test and learn.** Try realistic touchpoints rather than isolated word lists. Check authenticity, credibility, audience understanding, and usefulness.

Testing can lead back to expression, meaning, or positioning and evidence. The workflow is a loop, not a one-way checklist.

## Related brand work

- [Brand overview](../)
- [Visual identity](../visual-identity)
- [Voice and writing](../voice-and-writing)

## Editable Mermaid source

<details>
<summary>Show the source used to draw this flowchart</summary>

```mermaid
---
title: Brand-words workflow · verbal strategy, not full brand design
config:
  theme: base
  look: classic
  htmlLabels: false
  layout: dagre
  themeVariables:
    fontFamily: Arial, Helvetica, sans-serif
    fontSize: 18px
    primaryColor: '#F1F5F9'
    primaryTextColor: '#172B4D'
    primaryBorderColor: '#94A3B8'
    lineColor: '#64748B'
    clusterBkg: '#F8FAFC'
    clusterBorder: '#CBD5E1'
    edgeLabelBackground: '#FFFFFF'
  flowchart:
    htmlLabels: false
    wrappingWidth: 480
    useMaxWidth: false
    curve: basis
    nodeSpacing: 30
    rankSpacing: 50
    padding: 18
---
flowchart TB
  subgraph INTERNAL["INTERNAL MEANING"]
    direction TB
    P["1 · Prepare group material<br/>Stories · actions · ambitions<br/>Collect concrete examples"]
    A["2 · Abstract the material<br/>Observe → interpret → compare → group<br/>Trace every theme back to evidence"]
    I["3 · Choose an inner idea and words<br/>What is true and distinctive about us?<br/>Keep reasons and examples attached"]
    P --> A --> I
  end

  subgraph AUDIENCE["AUDIENCE EVIDENCE"]
    direction TB
    R["4 · Research the audience<br/>Needs · context · language · alternatives"]
    E["Gather and weigh evidence<br/>Interviews · observation · existing signals<br/>Challenge assumptions, not just confirm them"]
    R --> E
  end

  I --> POS
  E --> POS
  POS["5 · Define positioning<br/>For whom · in what context · why us?<br/>Connect inner truth with audience relevance"]
  POS --> T
  T["6 · Transform into outward language<br/>Explore several word and message directions<br/>Keep each tied to the inner idea and evidence"]
  T --> D1["Direction A<br/>Words + messages"]
  T --> D2["Direction B<br/>Words + messages"]
  T --> D3["Direction C<br/>Words + messages"]
  D1 & D2 & D3 --> USE
  USE["7 · Apply in real contexts<br/>Try the language in actual touchpoints<br/>Use examples, not isolated word lists"]
  USE --> TEST
  TEST["Test and learn<br/>Authentic to us? · Credible in practice?<br/>Meaningful and clear to the audience?"]
  TEST -. "refine expression" .-> T
  TEST -. "revisit meaning" .-> A
  TEST -. "revisit positioning and evidence" .-> POS

  classDef internal fill:#EAF2FB,stroke:#4C78A8,stroke-width:1.5px,color:#173552;
  classDef research fill:#E8F4EF,stroke:#4C9475,stroke-width:1.5px,color:#174C37;
  classDef bridge fill:#EEEAF8,stroke:#8A73B6,stroke-width:1.5px,color:#44305F;
  classDef outward fill:#FFF3DF,stroke:#C99645,stroke-width:1.5px,color:#60431E;
  classDef test fill:#173552,stroke:#173552,stroke-width:1.5px,color:#FFFFFF;
  class P,A,I internal;
  class R,E research;
  class POS bridge;
  class T,D1,D2,D3,USE outward;
  class TEST test;
  style INTERNAL fill:#F8FAFD,stroke:#C4D4E6,stroke-width:1px
  style AUDIENCE fill:#F6FBF8,stroke:#C0D9CD,stroke-width:1px
```

</details>

<script setup>
import flowchartUrl from './brand-words-workflow.svg?url'
</script>
