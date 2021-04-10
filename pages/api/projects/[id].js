export default async function project(req, res) {
    const id = req.query.id
    const projects = await (await fetch(`http://${req.headers.host}/data_projects.json`)).json()
    
    const project = projects.filter(project => project.id == id)

    res.status(200).json(project)
}