export default {
    'POST  /api/register': (_, res) => {
        res.send({
            data: { status: 'ok', currentAuthority: 'user' },
        });
    },
};
