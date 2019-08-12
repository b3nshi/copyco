### CopyCo

Simple Chrome extension to copy&paste cookies from one domain to another.

This is useful, for example, when you need to copy the auth cookies from a production environment
to your localhost.

#### Required permissions

* Storage: We store the cookies in the localStorage, so once you move to the tab where you want to paste the cookies we read them from it.
* Cookies: To be able to read/write the cookies
* Tabs: To get access to the different opened tabs. We use it only to get the current tab URL.
* <all_urls>: To be able to use the extension with any domain.

#### How to use it

1. Once installed, go to the tab where you have the cookies to copy, and click on "copy" button.
2. Go to the tab where you want to paste the cookies and click on "paste" button.
3. That's it!

#### Collaborators

<table>
  <tr>
    <td align="center">
        <a href="https://github.com/b3nshi">
            <img src="https://avatars0.githubusercontent.com/u/5185291?s=400&v=4" width="100px;" alt="Benjamin Simon"/>
            <br />
            <sub><b>Benjamin Simon</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/mateoguzmana">
            <img src="https://avatars2.githubusercontent.com/u/20783123?s=460&v=4" width="100px;" alt="Mateo Guzmán"/>
            <br />
            <sub><b>Mateo Guzmaán</b></sub>
        </a>
    </td>
  </tr>
</table>
