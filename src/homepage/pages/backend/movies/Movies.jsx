import { setIsAdd, setMessage } from "@/store/StoreAction";
import { StoreContext } from "@/store/StoreContext";
import {
  Plus
} from "lucide-react";
import React from "react";
import Footer from "../partials/Footer";
import Header from "../partials/Header";
import SearchBar from "../partials/SearchBar";
import SideNav from "../partials/SideNav";
import MoviesTable from "./MoviesTable";
import ModalAddMovie from "./ModalAddMovie";
import ModalValidation from "../partials/modals/ModalValidation";
import ModalError from "../partials/modals/ModalError";
import ToastSuccess from "../partials/ToastSuccess";
import ModalViewMovie from "./ModalViewMovie";

const Movies = () => {
 const {dispatch, store} = React.useContext(StoreContext);

 const handleAdd = () => {
  dispatch(setIsAdd(true));
 }
  return (
    <>
      <section className="layout-main">
        <div className="layout-division">
          <SideNav menu="movies" />
          <main>
            <Header />
            <div className="p-8">
              <div className="flex justify-between items-center">
                <SearchBar />
                <button className="btn btn-add" onClick={handleAdd}>
                  <Plus size={16} />
                  Add New
                </button>
              </div>

              <MoviesTable />
            </div>

            <Footer />
          </main>
        </div>
      </section>
      
      
      {store.validate && <ModalValidation/>}
      {store.validate && <ModalError/>}
      {store.success && <ToastSuccess />}
      
      {/* <SpinnerWindow /> */}
      {store.isAdd && <ModalAddMovie/>}
      {store.isAdd && <ModalViewMovie/>}
    </>
  );
};

export default Movies;
