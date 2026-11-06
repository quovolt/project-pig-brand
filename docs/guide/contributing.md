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
