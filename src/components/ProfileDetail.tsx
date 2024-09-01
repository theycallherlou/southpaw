interface IGraphData {
  givenName: string;
  surname: string;
  userPrincipalName: string;
  id: string;
}

export default function ProfileDetail({ givenName, surname, userPrincipalName, id }: IGraphData) {
  return (
    <div id="detail" className="container">
      <dl className="row">
        <dt className="col-sm-3">First Name:</dt>
        <dd className="col-sm-9">{givenName}</dd>

        <dt className="col-sm-3">Last Name:</dt>
        <dd className="col-sm-9">{surname}</dd>

        <dt className="col-sm-3">Email:</dt>
        <dd className="col-sm-9">{userPrincipalName}</dd>

        <dt className="col-sm-3">Id:</dt>
        <dd className="col-sm-9">{id}</dd>
      </dl>
    </div>
  );
}
