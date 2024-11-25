import React from 'react'
import TableLoader from '../partials/TableLoader'
import IconServerError from '../partials/IconServerError'
import Pills from '../partials/Pills'
import { Archive, ArchiveRestore, FilePenLine, FileVideo, Trash2 } from 'lucide-react'
import LoadMore from '../partials/LoadMore'
import IconNoData from '../partials/IconNoData'
import ModalDelete from '../partials/modals/ModalDelete'
import ModalConfirm from '../partials/modals/ModalConfirm'
import { StoreContext } from '@/store/storeContext'
import { setIsConfirm, setIsDelete, setIsView } from '@/store/StoreAction'
import ModalViewMovie from './ModalViewMovie'

const MoviesTable = () => {
  const {store, dispatch} = React.useContext(StoreContext);
  const handleDelete = () =>{
    dispatch(setIsDelete(true));
  }
  const handleRestore = () => {
    dispatch(setIsConfirm(true));
  }
  const handleArchive = () => {
    dispatch(setIsConfirm(true));
  }
  const handleView = () => {
    dispatch(setIsView(true));
  }
  
  return (
    <div> <div className="relative p-4 bg-secondary rounded-md mt-10 border border-line">
    {/* <SpinnerTable /> */}
    <div className="table-wrapper custom-scroll">
      {/* <TableLoader count={20} cols={4}/> */}
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>Title</th>
            <th>Year</th>
            <th>Duration</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td colSpan={100}>
              <IconNoData/>
            </td>
          </tr> */}
          {/* <tr>
            <td colSpan={100}>
              <IconServerError/>
            </td>
          </tr> */}
          {Array.from(Array(17).keys()).map((i) => (
            <tr key={i}>
              <td>{i + 1}.</td>
              <td>
                <Pills />
              </td>
              <td>Wedding Singer</td>
              <td>1999</td>
              <td>1hr 40mins</td>
              <td>
                <ul className="table-action">
                  {true ? (
                    <>
                      <li>
                        <button
                          className="tooltip"
                          data-tooltip="View" onClick={handleView}
                        >
                          <FileVideo />
                        </button>
                      </li>
                      <li>
                        <button
                          className="tooltip"
                          data-tooltip="Edit"
                        >
                          <FilePenLine />
                        </button>
                      </li>
                      <li>
                        <button
                          className="tooltip"
                          data-tooltip="Archive"
                        onClick={() =>handleArchive()}>
                          <Archive />
                        </button>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <button
                          className="tooltip"
                          data-tooltip="Restore"
                        onClick={() =>handleRestore()}>
                          <ArchiveRestore />
                        </button>
                      </li>
                      <li>
                        <button
                          className="tooltip"
                          data-tooltip="Delete" onClick={() =>handleDelete()}
                        >
                          <Trash2 />
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <LoadMore />
    </div>
  </div>
  {store.isDelete && <ModalDelete/>}
  {store.isConfirm && <ModalConfirm/>}
  {store.isView && <ModalViewMovie/>}
  </div>
  
  )
}

export default MoviesTable