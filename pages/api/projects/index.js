export default async(req, res) => {
  const projects = await (await fetch(`http://${req.headers.host}/data_projects.json`)).json()
  res.status(200).json(projects)
}
