export const getSteps = async () => {
    return [
        {
            name: 'Nombre del paso',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae lorem interdum, tincidunt diam vel, consequat diam. Nam nec pharetra urna. Integer non massa id nibh sagittis tincidunt. Fusce sollicitudin, purus at varius cursus, mi quam porttitor nisi, a tincidunt mauris ligula a arcu. Aliquam magna diam, vehicula non lorem eu, elementum congue lectus. Integer in magna euismod, feugiat massa nec, malesuada eros. Aliquam risus dolor, tristique in est in, ornare congue ex. Mauris porta nisl a vehicula auctor. In hac habitasse platea dictumst.',
            links: [{ name: 'Meet', link: 'https://meet.google.com/' }],
            color: 'red',
            current: false
        },
        {
            name: 'Segundo paso',
            description: 'Curabitur semper tristique eleifend. Donec condimentum ipsum sit amet faucibus faucibus. Pellentesque ut justo in eros maximus gravida. In id sollicitudin massa.',
            links: [{ name: 'Meet', link: 'https://meet.google.com/' }],
            color: 'blue',
            current: true
        },
        {
            name: 'Prueba técnica',
            description: 'Fusce eleifend hendrerit mi et tincidunt. Vivamus finibus molestie convallis. Nam vel neque vel purus accumsan commodo ac sit amet urna. Aliquam erat volutpat. Aliquam tempor lobortis nisi rhoncus auctor. Cras in hendrerit ligula.',
            links: [{ name: 'calendly', link: 'https://calendly.com/es' }, { name: 'Meet', link: 'https://meet.google.com/' }],
            color: 'green',
            current: false
        },
        {
            name: 'Oferta',
            description: 'Nam id turpis ornare, viverra erat vitae, rhoncus sem. Vestibulum nec urna placerat, bibendum eros ac, lobortis lacus. In eget lorem nunc. Suspendisse at consequat ligula. Fusce augue nunc, euismod sit amet eros eget, fringilla vehicula nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
            links: [{ name: 'calendly', link: 'https://calendly.com/es' }],
            color: 'yellow',
            current: false
        },
        {
            name: 'Primer día!!!',
            description: 'Ut varius odio felis, non pellentesque justo semper nec. Vestibulum eget lectus et massa mollis condimentum at vel orci.',
            links: [{ name: 'calendly', link: 'https://calendly.com/es' }],
            color: 'violet',
            current: false
        },
    ];
};