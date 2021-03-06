import { UserDetails } from '../models/youth-list';
import Image from 'next/image';

export default function JobList(props: { users: UserDetails[] }) {
  const users = props.users;
  return (
    <>
      {users.map((user: UserDetails, index: number) => (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3" key={user.fullName + " " + index}>
          <div className="card pb-5 shadow-sm give-me-food-pls">
            <div className="card-body">
              <div className="mx-5 mx-sm-0 p-3 p-lg-5 px-5">
                <div className="overflow-hidden position-relative rounded-circle">
                  <Image src={user.imageURL} layout="responsive" width="50px" height="50px" />
                </div>
              </div>
              <h5 className="card-title">{user.fullName}</h5>
              <p className="card-text">
                {user.shortDescription}
              </p>
              <div className="mt-5">
                <a className="rounded py-1 px-4 border fw-normal my-2 text-decoration-none light-button">
                  Open profile
                </a>
              </div>
            </div>
          </div>
        </div>
      ))
      }
    </>
  );
}