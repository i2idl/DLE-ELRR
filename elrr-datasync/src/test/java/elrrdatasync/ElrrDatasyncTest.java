package elrrdatasync;

import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.lang.reflect.Field;
import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import ch.qos.logback.classic.LoggerContext;
import ch.qos.logback.classic.spi.ILoggingEvent;
import ch.qos.logback.core.read.ListAppender;

public class ElrrDatasyncTest {
    @Test
    void testPrivateLogger() throws NoSuchFieldException, IllegalAccessException {
        Field privateLoggerField = ElrrDatasync.class.getDeclaredField("LOGGER");

        privateLoggerField.setAccessible(true);

        Logger logger = (Logger) privateLoggerField.get(null);

        assertNotNull(logger);
    }

    @Test
    void testPrivateConstructor() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException {
        Constructor<ElrrDatasync> privateConstructor = ElrrDatasync.class.getDeclaredConstructor();

        privateConstructor.setAccessible(true);

        try {
            privateConstructor.newInstance();
            fail("Expected exception UnsupportedOperationException was not thrown");
        } catch (InvocationTargetException e) {
            assertTrue(e.getTargetException() instanceof UnsupportedOperationException);
        }
    }

    @Test
    void testMainMethodLogging() {
        // Create a mock appender to capture log events
        LoggerContext loggerContext = (LoggerContext) LoggerFactory.getILoggerFactory();
        ListAppender<ILoggingEvent> appender = new ListAppender<>();
        appender.start();
        loggerContext.getLogger("elrrdatasync").addAppender(appender);

        // Call the main method of ElrrDatasync
        ElrrDatasync.main(null);

        // Retrieve the captured log events
        List<ILoggingEvent> logEvents = appender.list;

        // Assert that there is exactly one log event
        assertEquals(1, logEvents.size());

        // Assert that the log message is as expected
        assertEquals("Hello World", logEvents.get(0).getMessage());
    }
}
