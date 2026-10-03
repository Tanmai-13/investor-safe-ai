<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the investor-safety demo analysis in a browser-local shared context with a separate explicit demo-data flag, because the prototype must not imply official verification or real AI analysis.
- Keep screenshot OCR lazy-loaded in the browser, because the app's edge runtime cannot host native image-processing workers and private messages should stay on-device for this demo.
