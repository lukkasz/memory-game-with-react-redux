import React from 'react';
import {shallow, mount} from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'app/reducers';


function shallowWithStore(ComponentClass, props, state) {
	
	const componentInstance = shallow(
		<Provider store={createStore(reducers, state)}>
		 	<ComponentClass {...props} />
    </Provider>
	);

	return componentInstance;
}

function mountWithStore(ComponentClass, props, state) {
	
	const componentInstance = mount(
		<Provider store={createStore(reducers, state)}>
		 	<ComponentClass {...props} />
    </Provider>
	);

	return componentInstance;
}

export {shallowWithStore, mountWithStore }