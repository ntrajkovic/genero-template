# GENERO Template

_This is the GENERO journal website template._

GENERO is a journal of feminist theory and cultural studies.

The GENERO journal is published by:

* The Faculty of Political Sciences, University of Belgrade (Publisher)
* The Women's Studies Center, Belgrade (Co-publisher)

The GENERO journal website is supported by:
* Reconstruction Women's Fund, Belgrade (Sponsor)

Official website: ...\
Development: [ntrajkovic.github.io/genero-template](https://ntrajkovic.github.io/genero-template)

## Notes

* **Important** &ndash; Remove no-indexing meta and "template" strings from original, hosted site!
* **Downloads** &ndash; Keep `/downloads` folder empty to preserve GitHub space.

## To-Do

* **G-Button** &ndash; Use "G" image from logo, instead of "G" letter?
* **G-Button Color** &ndash; Use header color (stylish), or border color (logical)?
* **Font** &ndash; Download font files and use them from site to avoid Google dependency?

## Dev. Notes

* **Sidebar & Navbar** &ndash; Sidebar (w3-sidebar) and content (w3-main) go from page top to bottom on mobile devices. Contrary, on large screens, sidebar can not fit between header and footer (w3-sidebar nature), so it is replaced by "normal" navbar (w3-left vs. w3-main).
* **Commit #d40fee5** &ndash; CSS rule `!important` is deleted from w3-collapse, to enable w3-hide-large for w3-sidebar. This is the fastest approach.
* **Sidebar Dev. Tip** &ndash; For easier and faster development, remove w3-hide-large from sidebar section!
* **Sidebar ID Names** &ndash; Use _#id-name-sidebar_ for id-s that occur in other sections too.
* **Commit #3cb7b02** &ndash; W3.CSS classes w3-third and w3-twothird are used without parent w3-row container class (w3-row does not support w3-left navbar), in cover page section, in index.html. It works!

&diams; &diams; &diams;

Copyright &copy; 2018 Faculty of Political Sciences, University of Belgrade; Women's Studies Center, Belgrade. All rights reserved.
