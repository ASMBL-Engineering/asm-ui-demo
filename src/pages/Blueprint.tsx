import {
  ArrayBlueprint,
  AsideBlueprint,
  BooleanBlueprint,
  ContentBlueprint,
  HeaderBlueprint,
  NumberBlueprint,
  ObjectBlueprint,
  PageBlueprint,
  StringBlueprint
} from '@assemble-inc/blueprint';

const Blueprint = () => {
  return (
    <PageBlueprint headerContent={<div>header</div>} asideContent={<div>aside</div>}>
      <ArrayBlueprint array={['red', 'blue', 'green']} />
      <BooleanBlueprint boolean={false} />
      <ContentBlueprint>Content</ContentBlueprint>
      <NumberBlueprint number={3} />
      <ObjectBlueprint
        object={{ color1: 'red', color2: 'blue', color3: { number1: 2, thing2: false, thing3: ['sdfv', 'cert'] } }}
      />
      <StringBlueprint string="String" />
    </PageBlueprint>
    // <HeaderBlueprint>Header</HeaderBlueprint>
    // <AsideBlueprint>Aside</AsideBlueprint>
  );
};

export default Blueprint;
