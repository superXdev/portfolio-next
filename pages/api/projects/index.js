import projects from 'data_projects'

export default (req, res) => {
  res.status(200).json(projects)
}
