import projects from 'data_projects'

export default function project(req, res) {
    const id = req.query.id
    const project = projects.filter(project => project.id == id)

    res.status(200).json(project)
}