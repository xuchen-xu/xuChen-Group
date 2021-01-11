/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const componentsRouter = {
    path: '/components',
    component: Layout,
    redirect: 'noRedirect',
    name: 'ComponentDemo',
    meta: {
        title: '营销',
        icon: 'component'
    },
    children: [{
            path: 'tinymce',
            component: () =>
                import ('@/views/components-demo/tinymce'),
            name: 'TinymceDemo',
            meta: { title: '秒杀活动列表' }
        },
        {
            path: 'markdown',
            component: () =>
                import ('@/views/components-demo/markdown'),
            name: 'MarkdownDemo',
            meta: { title: '优惠券列表' }
        },
        {
            path: 'json-editor',
            component: () =>
                import ('@/views/components-demo/json-editor'),
            name: 'JsonEditorDemo',
            meta: { title: '品牌推荐' }
        },
        {
            path: 'split-pane',
            component: () =>
                import ('@/views/components-demo/split-pane'),
            name: 'SplitpaneDemo',
            meta: { title: 'SplitPane' }
        },
        {
            path: 'avatar-upload',
            component: () =>
                import ('@/views/components-demo/avatar-upload'),
            name: 'AvatarUploadDemo',
            meta: { title: '新品推荐' }
        },
        {
            path: 'dropzone',
            component: () =>
                import ('@/views/components-demo/dropzone'),
            name: 'DropzoneDemo',
            meta: { title: '人气推荐' }
        },
        {
            path: 'sticky',
            component: () =>
                import ('@/views/components-demo/sticky'),
            name: 'StickyDemo',
            meta: { title: '专题推荐' }
        },
        {
            path: 'count-to',
            component: () =>
                import ('@/views/components-demo/count-to'),
            name: 'CountToDemo',
            meta: { title: '广告列表' }
        }
    ]
}

export default componentsRouter