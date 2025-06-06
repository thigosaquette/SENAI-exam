import InputFieldSesi from '../InputFieldSesi.jsx'

// COMENTAR SOBRE

export default {
  title: 'Componentes/Formulários/InputFieldSesi',
  component: InputFieldSesi,
  argTypes: {
    label: {
      control: 'text',
      description: 'Texto que aparece acima do campo de input',
      defaultValue: 'Nome completo'
    },
    placeholder: {
      control: 'text',
      description: 'Texto que aparece dentro do campo de input como sugestão',
      defaultValue: 'Digite seu nome'
    }
  }
}

const Template = (args) => <InputFieldSesi {...args} />

export const Padrao = Template.bind({})
Padrao.args = {
  label: 'Nome completo',
  placeholder: 'Digite seu nome'
}
