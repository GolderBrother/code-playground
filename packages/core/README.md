# CodePlayground

<p align="center">
  <p>CodePlayground 是一款轻量、免登录、极快运行速度的 WebIDE，可以在线编写 vue2/3、react 等应用代码并运行，性能远超 CodePen、CodeSandbox、Stackblitz 等同类的产品。</p>
</p>

</div>

## 安装

```shell
npm i codeplayground
# or
yarn add codeplayground
# or
pnpm add codeplayground
```

## 使用

具体的使用参照[使用手册](https://delta-component.woa.com/code-playgrounddocs/guide/start.html)

## 支持语法

- ✅ html
- ✅ js/ts
- ✅ css/less/scss
- ✅ jsx/tsx
- ✅ vue2/3
- ✅ react

## 速度对比

- 比较基准: 以 Antd 组件库的 [Button Demo](https://ant.design/components/button-cn#%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA) 为例，分别访问各个平台，记录 Demo 加载完毕的总时长
- 测试环境: Chrome v118、Windows 平台、100MB 带宽

| 平台        | 首次访问(无缓存) | 后续访问(有缓存) | Demo 地址                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------- | ---------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CodePlayground  | 8s               | 2s               | [CodePlayground](https://delta-component.woa.com/?entry=index.html&activeFile=App.tsx&theme=dark#eNqNU9tq20AQ/ZWtXmyDpa0LheDIIomTQKBQExxoQS8b7cTadi+qtL5h/O+dWcmuDW7I045mzjk7c3a0i5SVsElKb3Q0jtJP99+n85+zB0aJLLcpnUwLu5jkEdg8whxjaQlChghjA16wohR1Ax5BL/PH+CqPGD+rl95XMfxZqhVCfsQvt/HUmUp49aoBwYWzHizRnx4mIBeUOxewwgCWVwrWlav9GWetpC8nElaqgDh8DJmyyiuh46YQGiaj5POpoldeQzZ1EmZabKFOeZsJs/HjcOmrk9sDR6oVUxJvE1WFNqQcEx3hCEubolaVZ35bUbPGySWN10koQ52zXsKNUDbxzaZ33Qq0NLKbB9+jYdSCYyOq5FfjLL7NjrB5V2jyaMxChnI1iAItGWNIRjdjzqExSVPyULkZXSVfyIHhGSGWzvD/s6jcMRF1pArr5UUSFW6+JqNRMsojQu9zu8dJDsPiCJ0DzyTP3mpn/vWOTnTVHSsw5+HZOc/2Z7DQcaEVPvsp47aqWhhai/HB2dziijSe1SQ0OVHtS1csDYokC/APGii82z7Jfg/ftjcYIJc4SQ34b9T9lPR5NsBZOvWLo/RCi3TxcZC7pffODtmjhs1hlB75dNoeao5bneRxin32B2ySsX7YjEBciAqXqTFCa1zidR0+6ThuVtpedNi7qlZG1Fssz9qoayTl7XnOyu7hTSy1fxd0kJaiKQHfP7sPwYc4Hjb4XNkcjw/htbK/Ef8Nj0v4lJMrGNI75RY2wWzZDYFuXkf7v6BCmeI=) |
| CodePen     | 12s              | 4s               | [CodePen](https://codepen.io/ischaqje-the-bold/pen/OJdgQew?editors=001)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| CodeSandbox | 19s              | 17s              | [CodeSandbox](https://codesandbox.io/s/yv7rzl)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Stackblitz  | 29s              | 22s              | [Stackblitz](https://stackblitz.com/edit/react-nxlcxa?file=demo.tsx)   