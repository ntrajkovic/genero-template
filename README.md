# GENERO Template

_GENERO journal website template._

GENERO is a journal of feminist theory and cultural studies.

The GENERO journal is published by:

* The Faculty of Political Sciences, University of Belgrade (Publisher)
* The Center for Women's Studies, Belgrade (Co-publisher)

The GENERO journal website is supported by:
* The Reconstruction Women's Fund, Belgrade (Sponsor)

Official website: not available yet\
Development: [ntrajkovic.github.io/genero-template](https://ntrajkovic.github.io/genero-template)

## Notes

* **Important** &ndash; Remove no-indexing meta and "template" strings from original, hosted site!
* **Downloads** &ndash; Keep `/downloads` folder empty to preserve GitHub space.

## To Do

* **Cover Image** &ndash; Add slider for more images on Home Page?
* **G-Button** &ndash; Use "G" image from logo, instead of "G" letter?

## Dev. Notes

* **Sidebar & Navbar** &ndash; Sidebar (w3-sidebar) goes from page top to bottom (w3-sidebar nature). It can not fit between header and footer (on large screens in this case), so it is "replaced" by Navbar (which is w3-left).
* **Commit #d40fee5** &ndash; CSS rule `!important` is deleted from w3-collapse, to enable w3-hide-large for w3-sidebar. This is the fastest approach!
* **Commit #3cb7b02** &ndash; W3.CSS classes w3-third and w3-twothird are used without parent w3-row container (cover page section, index.html), because w3-row does not support Navbar's w3-left (float). It works!
* **Sidebar Dev. Tip** &ndash; For easier and faster development, temporarily remove w3-hide-large from sidebar section.
* **Sidebar IDs** &ndash; Use _#name-sidebar_ for ids that occur in other sections too.

## Copyright

Copyright &copy; 2018 Faculty of Political Sciences, University of Belgrade; Center for Women's Studies, Belgrade. All rights reserved.
