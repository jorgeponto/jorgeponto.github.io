---
layout: post
title: Testes Automáticos em Acessibilidade Web
---
## Referências
- Terryll Thompson. (2016). [My Post-CSUN Comparison of Web Accessibility Checkers](http://terrillthompson.com/tests/menus/accessible-mega-menu/test.html). Esta análise foi elaborada por Terryll Thompson. O Terryll utilizou as páginas da [Accessibility University 3.0](http://www.washington.edu/accesscomputing/AU/) e submeteu-as a várias ferramentas de análise. Daqui resultou um quadro comparativo de 18 aspetos de acessibilidade. [Accessible University Demo Site (página que serve de amostra)](http://www.washington.edu/accesscomputing/AU/before.html). See above results compiled by Jorge Fernandes with AccessMonitor (made at August, 9, 2016).

## Results of AccessMonitor to the <abbr title="Accessibility University 3.0" lang="en">AU</abbr> Homepage

<table>
<caption>AccessMonitor Results to Accessibility University 3.0 (HomePage)</caption>
<tr>
 <th width="40%">Issue</th>
 <th width="10%">AccessMonitor</th>
 <th width="50%">Terrill Thompson Notes</th>
</tr>
<tr>
 <td>1. No headings:</td>
 <td style="background-color:#969;">Yes (0 headings)</td>
 <td>The page has clear visible headings, but no HTML heading markup.</td>
</tr>
<tr>
 <td>2. No alt text:</td>
 <td></td>
 <td>There are several informative images with no alt attributes.</td>
</tr>
<tr>
 <td>3. Bad alt text:</td>
 <td></td>
 <td>There are three decorative images with alt="horizontal line graphic".</td>
</tr>
<tr>
 <td>4. Color contrast:</td>
 <td></td>
 <td>The navigation menu has poor color contrast.</td>
</tr>
<tr>
 <td>5. Dropdown menu:</td>
 <td></td>
 <td>The dropdown menu has many problems, the greatest being that the submenus are hidden from everyone (including screen reader users), and can only be revealed by hovering with a mouse.</td>
</tr>
<tr>
 <td>6. Visible focus:</td>
 <td></td>
 <td>There is no visible focus indicator for links. In fact, the browser's default indicator has been overridden in CSS.</td>
</tr>
<tr>
 <td>7. Link text:</td>
 <td></td>
 <td>There are three instances of "click here" as link text.</td>
</tr>
<tr>
 <td>8. Color used for information:</td>
 <td></td>
 <td>The application form says "required fields are in blue". Also, hyperlinks in the main body are not underlined, therefore only distinguishable as links by color.</td>
</tr>
<tr>
 <td>9. Language:</td>
 <td></td>
 <td>There is no lang attribute that identifies the language of the page as English. There is also a block of Spanish content that has no lang attribute identifying it as Spanish.</td>
</tr>
<tr>
 <td>10. Form fields:</td>
 <td></td>
 <td>There are no <label>, <fieldset>, or <legend> elements in the application form.</td>
</tr>
<tr>
 <td>11. CAPTCHA:</td>
 <td></td>
 <td>The application form includes a visual CAPTCHA.</td>
</tr>
<tr>
 <td>12. Form validation:</td>
 <td></td>
 <td>If the user submits the form with errors, an error message appears at the top of the form that says "Your form has errors. Please correct them and resubmit." This error message provides insufficient help to the user, and is not coded in a way that exposes it to screen reader users.</td>
</tr>
<tr>
 <td>13. ARIA Landmarks:</td>
 <td></td>
 <td>There are no ARIA landmark roles on this page.</td>
</tr>
<tr>
 <td>14. Modal dialog:</td>
 <td></td>
 <td>One of the "click here" links triggers a modal dialog, which is not truly modal. It fails to trap keyboard focus, cannot be closed by pressing the escape key, and is not easily accessible to screen reader users.</td>
</tr>
<tr>
 <td>15. Carousel:</td>
 <td></td>
 <td>Carousels are complex widgets with many parts. The carousel on this page is a fairly typical carousel with many problems: Keyboard users are unable to access all components; screen reader users are unable to operate the controls or access and understand all content; and people who are distracted by movement or who need more time to read the content are unable to pause the animation.</td>
</tr>
<tr>
 <td>16. Data table:</td>
 <td></td>
 <td>The page includes a data table that does not use `<th>` elements to identify row and column headers.</td>
</tr>
<tr>
 <td>17. Abbreviations:</td>
 <td></td>
 <td>The data table includes several abbreviations that could be difficult for all users to understand, including at least one ambiguous one ("ECO" could be "Ecology" or "Economics"). Providing a mechanism for expanding abbreviations (e.g., the `<abbr>` element) is only a Level AAA success criterion in WCAG 2.0, but in this case would be extremely helpful.</td>
</tr>
<tr>
 <td>18. HTML validation:</td>
 <td></td>
 <td>Validation of this page yields five errors, all related to images with no alt text.</td>
</tr>
</table>
