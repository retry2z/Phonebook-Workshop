export default async function commons(context) {
    return context.partials = {
        header: await context.load('./views/common/header.hbs'),
        footer: await context.load('./views/common/footer.hbs'),
    }
}