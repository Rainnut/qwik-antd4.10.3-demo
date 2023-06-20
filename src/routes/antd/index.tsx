import { component$, useSignal } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import {
  AntdTabs,
  AntdTabPane,
  TableApp,
} from '~/integrations/react/antdComponents'
// import 'antd/dist/antd.css';

export default component$(() => {
  const count = useSignal(0)
  const variant = useSignal<'contained' | 'outlined' | 'text'>('contained')

  return (
    <>
      <h1>Qwik/React mother of all demos</h1>
      <select
        value={variant.value}
        onChange$={(ev) => {
          variant.value = (ev.target as any).value
        }}
      >
        <option>text</option>
        <option>outlined</option>
        <option selected>contained</option>
      </select>

      <AntdTabs defaultActiveKey="1">
        <AntdTabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </AntdTabPane>
        <AntdTabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </AntdTabPane>
        <AntdTabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </AntdTabPane>
      </AntdTabs>

      <TableApp client:visible>Slider is {count.value}</TableApp>
    </>
  )
})

export const head: DocumentHead = {
  title: 'Qwik React',
}
