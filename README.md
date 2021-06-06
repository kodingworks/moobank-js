# Moobank - JS

TODO:
- [ ] Gateway
- [ ] Factory
- [ ] Request Client
- [ ] Abstract Message Request & Response
- [ ] Test

```ts
const moobank = new Moobank

const moobankFactory = moobank.createGateway(new MoobankMandiriMIB, new PuppeteerClient)
moobankFactory.banking().balance()
moobankFactory.banking().inquiry()
```