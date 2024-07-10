// import ExampleButtons from "./Components/ExampleButtons";
// import ExampleTextField from "./Components/ExampleTextField";
// import ExampleSelect from "./Components/ExampleSelect";
// import ExampleDialog from "./Components/ExampleDialog";
// import ExampleCheckbox from "./Components/ExampleCheckbox";
// import ExampleMenu from "./Components/ExampleMenu";
// import ExampleRadio from "./Components/ExampleRadio";
// import ExampleRating from "./Components/ExampleRating";

// import ExampleDrawer from "./Components/ExampleDrawer";
// import ExampleContainer from "./Components/ExampleContainer";
// import ExamplePopover from "./Components/ExamplePopover";
import { ThemeProvider } from '@mui/material/styles';
import ExampleAutoComplete from "./Components/ExampleAutoComplete";
import ExamplePopper from "./Components/ExamplePopper";
import ExampleTheming from "./Components/ExampleTheming";
import ExampleTransitions from "./Components/ExampleTransitions";
import ExampleUseMediaQuery from "./Components/ExampleUseMediaQuery";
import theme from './theme';
// import ExampleStack from "./Components/ExampleStack";
// import ExampleTabs from "./Components/ExampleTabs";
// import ExamplePagination from "./ExamplePagination";

// import ExampleCard from "./Components/ExampleCard";
// import ExampleBreadCrumb from "./Components/ExampleBreadCrumb";
// import ExamplePaper from "./Components/ExamplePaper";

// import ExampleGrid from "./Components/ExampleGrid";
// import ExampleProgress from "./Components/ExampleProgress";
// import ExampleSkeleton from "./Components/ExampleSkeleton";
// import ExampleSnackbar from "./Components/ExampleSnackbar";
// import ExampleAccordion from "./Components/ExampleAccordion";
// import ExampleDivider from "./Components/ExampleDivider";
// import ExampleTooltip from "./Components/ExampleTooltip";
// import ExampleTypography from "./Components/ExampleTypography";

// import ExampleAvatar from "./Components/ExampleAvatar";
// import ExampleBadge from "./Components/ExampleBadge";
// import ExampleChip from "./Components/ExampleChip";
// import ExampleSwitch from "./Components/ExampleSwitch";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";


function App() {
  return (
    <ThemeProvider theme={theme} >
      <div id="app" style={{ padding: 24 }}>
        <ExampleTheming />
      </div>
    </ThemeProvider>
  );
}

export default App;
