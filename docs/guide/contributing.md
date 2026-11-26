# Contributing

Keep documentation changes small, reviewable, and grounded in actual brand decisions.

## Add or update a page

1. Create a feature branch.
2. Add or edit a Markdown file under `docs/`.
3. If you add a page, link it from the appropriate section in `docs/.vitepress/config.mts`.
4. Run `npm run format`, then `npm run check`.
5. Preview with `npm run docs:preview` and check the changed pages.
6. Open a draft pull request with the source or context for the change.

## Distinguish decisions from proposals

Use an explicit note when content is still proposed or awaiting approval. Include the decision source when approved guidance is added. Do not turn examples, temporary styling, or open questions into brand rules.

## Write useful documentation

- Explain the rule, why it exists, and how to use it.
- Prefer short sections and descriptive headings.
- Link to related pages instead of repeating guidance.
- Include examples only when their status is clear.
- Use relative links for other documentation pages.

## Handle assets carefully

Before adding an asset, confirm that it is approved for the repository and document its source, intended use, and any license restrictions. Keep credentials, personal information, and unapproved materials out of the site.

Files in `docs/public/`, if that directory is added later, are copied directly into the built website. They are not protected just because they are unlinked.

## Review checklist

- [ ] The guidance matches its cited source or is clearly marked as a proposal.
- [ ] Navigation and internal links work.
- [ ] Pages are readable on a narrow screen and in light and dark modes.
- [ ] New assets have usage and source information.
- [ ] `npm run check` passes.
- [ ] The change does not enable deployment or alter access without approval.

## 品牌文档怎么写

先写读者遇到的情境、要判断的事，再写方法名。把「保持触点一致」改成别人能检查的要求，比如「确认页和通知都要告诉人：订单是否已确认、下一步做什么」。编号用来追溯，不能代替一句说得明白的话。把当时没选的路、还没拿到的证据留清楚；不要为了文字好看，把设想改写成承诺。
